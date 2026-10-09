import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3fcb3g_r.css';
import '../../css/l/l37lfua-l.css';
import '../../css/c/c64c-7baa.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="f3fcb3g_r"/><path class="l37lfua-l"/><path class="c64c-7baa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scissors-48-bold"} {...others} />);
}

export default Component;
