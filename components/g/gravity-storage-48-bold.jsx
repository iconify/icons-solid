import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mheydraer.css';
import '../../css/v/vrwv3ubdj.css';
import '../../css/l/lheu_vbwv.css';
import '../../css/t/tq_15om_e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mheydraer"/><path class="vrwv3ubdj"/><path class="lheu_vbwv"/><path class="tq_15om_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gravity-storage-48-bold"} {...others} />);
}

export default Component;
