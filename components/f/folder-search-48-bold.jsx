import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hx3v-fbjr.css';
import '../../css/v/v3vwc3z2u.css';
import '../../css/z/zzhfcob3h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hx3v-fbjr"/><path class="v3vwc3z2u"/><path class="zzhfcob3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-search-48-bold"} {...others} />);
}

export default Component;
