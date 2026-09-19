import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvcq89ble.css';
import '../../css/n/nrpvuib6n.css';
import '../../css/k/k9tu7_cyc.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cvcq89ble"><path class="nrpvuib6n"/><path class="k9tu7_cyc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:eslint-ignore"} {...others} />);
}

export default Component;
