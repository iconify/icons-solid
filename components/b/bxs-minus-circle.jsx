import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lx0on2fza.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lx0on2fza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-minus-circle"} {...others} />);
}

export default Component;
