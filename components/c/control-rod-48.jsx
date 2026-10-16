import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gm_-_fgwp.css';
import '../../css/k/kicqyzbtl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gm_-_fgwp"/><path class="kicqyzbtl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:control-rod-48"} {...others} />);
}

export default Component;
