import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j8dcesb7n.css';
import '../../css/s/sb555ccjn.css';
import '../../css/v/vtvsuobia.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j8dcesb7n"/><path class="sb555ccjn"/><path class="vtvsuobia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pipeline-48"} {...others} />);
}

export default Component;
