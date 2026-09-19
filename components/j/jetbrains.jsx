import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lqd53454f.css';
import '../../css/t/ttzgexr7y.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="lqd53454f"/><path class="ttzgexr7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:jetbrains"} {...others} />);
}

export default Component;
