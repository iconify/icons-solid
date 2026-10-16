import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wl32e1bkb.css';
import '../../css/z/zafm50xfx.css';
import '../../css/b/bn2n7mbcf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wl32e1bkb"/><path class="zafm50xfx"/><path class="bn2n7mbcf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rake-48-bold"} {...others} />);
}

export default Component;
