import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jrjlwqjtj.css';
import '../../css/a/au4v49w_v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jrjlwqjtj"/><path class="au4v49w_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:volume-high-20-bold"} {...others} />);
}

export default Component;
