import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nnd46w4ky.css';
import '../../css/z/zituklbcd.css';
import '../../css/l/lw1yluboz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nnd46w4ky"><path class="zituklbcd"/><path class="lw1yluboz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:download"} {...others} />);
}

export default Component;
