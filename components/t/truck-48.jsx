import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xujk5fdpi.css';
import '../../css/w/wg4scnbvv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xujk5fdpi"/><path class="wg4scnbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:truck-48"} {...others} />);
}

export default Component;
