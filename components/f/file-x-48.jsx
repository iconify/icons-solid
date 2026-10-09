import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dezwopb-j.css';
import '../../css/x/xc-zgrb_m.css';
import '../../css/h/hjcr5ccak.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dezwopb-j"/><path class="xc-zgrb_m"/><path class="hjcr5ccak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-x-48"} {...others} />);
}

export default Component;
