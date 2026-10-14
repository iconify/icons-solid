import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w79h7j-7v.css';

const viewBox = {"width":180,"height":180};
const content = `<path class="w79h7j-7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:earmark-light"} {...others} />);
}

export default Component;
