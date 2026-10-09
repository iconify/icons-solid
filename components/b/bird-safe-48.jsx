import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xs628n7li.css';
import '../../css/i/is5s5qqcb.css';
import '../../css/r/r5wz4ccht.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xs628n7li"/><path class="is5s5qqcb"/><path class="r5wz4ccht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bird-safe-48"} {...others} />);
}

export default Component;
