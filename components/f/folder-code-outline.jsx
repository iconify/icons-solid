import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pt07y0bxu.css';
import '../../css/y/y1r440bhs.css';
import '../../css/m/mxpx_sbmx.css';
import '../../css/p/pzmtr-buq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pt07y0bxu"/><path class="y1r440bhs"/><path class="mxpx_sbmx"/><path clip-rule="evenodd" class="pzmtr-buq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-code-outline"} {...others} />);
}

export default Component;
