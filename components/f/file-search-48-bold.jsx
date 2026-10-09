import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8jsxg0hb.css';
import '../../css/y/y288-qr4x.css';
import '../../css/z/zzhfcob3h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s8jsxg0hb"/><path class="y288-qr4x"/><path class="zzhfcob3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-search-48-bold"} {...others} />);
}

export default Component;
