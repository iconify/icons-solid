import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/o/on4xanaty.css';
import '../../css/w/wp_18jlcj.css';
import '../../css/f/ftp9o4b8i.css';
import '../../css/y/y-fnsjb3i.css';
import '../../css/x/xpnarr_qv.css';
import '../../css/u/uhi6ltb6r.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path class="on4xanaty"/><path clip-rule="evenodd" class="wp_18jlcj"/></g><path clip-rule="evenodd" class="ftp9o4b8i"/><path clip-rule="evenodd" class="y-fnsjb3i"/><path clip-rule="evenodd" class="xpnarr_qv"/><path clip-rule="evenodd" class="uhi6ltb6r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:rewind-time-print"} {...others} />);
}

export default Component;
