import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ndv3dvc2g.css';
import '../../css/f/fi80utbym.css';
import '../../css/q/qyvlp9bjn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ndv3dvc2g"/><path class="fi80utbym"/><path class="qyvlp9bjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:archery-20"} {...others} />);
}

export default Component;
