import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqdv09daf.css';
import '../../css/i/ieq7_db9f.css';
import '../../css/e/egp_zuxqz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hqdv09daf"/><path class="ieq7_db9f"/><path class="egp_zuxqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermometer-down-48"} {...others} />);
}

export default Component;
