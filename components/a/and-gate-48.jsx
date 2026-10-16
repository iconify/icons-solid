import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mqsl-cq4l.css';
import '../../css/r/rzc5_66zc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mqsl-cq4l"/><path class="rzc5_66zc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:and-gate-48"} {...others} />);
}

export default Component;
