import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3l0q_b-c.css';
import '../../css/q/qdnhae7pn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s3l0q_b-c"/><path class="qdnhae7pn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:agv-48"} {...others} />);
}

export default Component;
