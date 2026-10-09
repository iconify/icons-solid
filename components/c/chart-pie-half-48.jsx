import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbr1am0tu.css';
import '../../css/t/tlsd_fw4s.css';
import '../../css/s/szs1icb1v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xbr1am0tu"/><path class="tlsd_fw4s"/><path class="szs1icb1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-pie-half-48"} {...others} />);
}

export default Component;
