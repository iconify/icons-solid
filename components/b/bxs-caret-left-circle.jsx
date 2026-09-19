import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mk0ow5b3t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mk0ow5b3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-caret-left-circle"} {...others} />);
}

export default Component;
