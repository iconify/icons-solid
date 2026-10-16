import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n5u49bxgz.css';
import '../../css/n/n-rap1bom.css';
import '../../css/e/ehybfubeh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n5u49bxgz"/><path class="n-rap1bom"/><path class="ehybfubeh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hinge-20-bold"} {...others} />);
}

export default Component;
