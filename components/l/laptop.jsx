import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/op92b2h4b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="op92b2h4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mi:laptop"} {...others} />);
}

export default Component;
