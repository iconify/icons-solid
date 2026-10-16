import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i6pxhx3fr.css';
import '../../css/b/bj9m5zbrg.css';
import '../../css/e/e13md-fck.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i6pxhx3fr"/><path class="bj9m5zbrg"/><path class="e13md-fck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:telemetry-48-bold"} {...others} />);
}

export default Component;
