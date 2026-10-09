import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o9ls55b_f.css';
import '../../css/n/n0np7fbxk.css';
import '../../css/j/j1y330bee.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="o9ls55b_f"/><path class="n0np7fbxk"/><path class="j1y330bee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:import-export-20"} {...others} />);
}

export default Component;
