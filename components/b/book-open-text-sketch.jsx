import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u4i1h5rnw.css';
import '../../css/h/hojxk-buu.css';
import '../../css/m/marbhb1xt.css';
import '../../css/b/bc4_-ymjz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="u4i1h5rnw"/><path class="hojxk-buu wm-k"/><path class="marbhb1xt wm-k"/><path class="bc4_-ymjz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:book-open-text-sketch"} {...others} />);
}

export default Component;
