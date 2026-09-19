import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvcq89ble.css';
import '../../css/o/oa964uw4k.css';
import '../../css/q/q8ppmua1p.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cvcq89ble"><path class="oa964uw4k"/><path class="q8ppmua1p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:tauri-ignore"} {...others} />);
}

export default Component;
