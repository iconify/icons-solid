import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/azssgq8vo.css';
import '../../css/f/fb-tfrrxs.css';
import '../../css/d/dq17-kjgo.css';
import '../../css/e/eo_cd6ble.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="azssgq8vo"/><path class="fb-tfrrxs"/><path class="dq17-kjgo"/><path class="eo_cd6ble"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hazard-environment-48"} {...others} />);
}

export default Component;
