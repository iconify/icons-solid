import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uvf-xkd7w.css';
import '../../css/q/qcyw9hsoi.css';
import '../../css/y/yv_v-ij1v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uvf-xkd7w"/><path class="qcyw9hsoi"/><path class="yv_v-ij1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:waste-to-energy-48-bold"} {...others} />);
}

export default Component;
