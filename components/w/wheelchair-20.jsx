import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u48dvzb0i.css';
import '../../css/j/j9cnkbbzh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u48dvzb0i"/><path class="j9cnkbbzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wheelchair-20"} {...others} />);
}

export default Component;
