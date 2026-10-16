import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9z4m6_0r.css';
import '../../css/j/j1jrbccvj.css';

const viewBox = {"width":180,"height":180};
const content = `<path class="j9z4m6_0r"/><path class="j1jrbccvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:flame"} {...others} />);
}

export default Component;
