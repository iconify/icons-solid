import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t09-k6bhj.css';
import '../../css/g/gey454wyg.css';
import '../../css/t/tv47yb_hb.css';
import '../../css/p/p455iibjr.css';
import '../../css/e/e-_oicbjy.css';
import '../../css/a/ag2gawbwb.css';
import '../../css/y/y-22eon_a.css';
import '../../css/j/jycl6uynr.css';
import '../../css/f/ft34ec7aa.css';
import '../../css/h/hfmx6xbkv.css';
import '../../css/r/r8lpqvoin.css';
import '../../css/k/kxikbtbap.css';
import '../../css/b/b6ajtctio.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t09-k6bhj wm-shadow"/><path class="gey454wyg wm-k"/><path class="tv47yb_hb wm-k"/><path class="p455iibjr wm-k"/><path class="e-_oicbjy wm-shine"/><path class="ag2gawbwb wm-k"/><path class="wm-k y-22eon_a"/><path class="jycl6uynr wm-k"/><path class="ft34ec7aa wm-shine"/><path class="hfmx6xbkv wm-s"/><path class="r8lpqvoin wm-s"/><path class="kxikbtbap wm-s"/><path class="b6ajtctio wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:unlink"} {...others} />);
}

export default Component;
