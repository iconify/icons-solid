import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hnkx8qb-r.css';
import '../../css/f/fb-ay-bql.css';
import '../../css/s/slrghbbxr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="hnkx8qb-r wm-k"/><path class="fb-ay-bql wm-k"/><path class="slrghbbxr wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:minimize-sketch"} {...others} />);
}

export default Component;
