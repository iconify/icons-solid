import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/e/etqf5iv0q.css';
import '../../css/h/hq4mt9hro.css';
import '../../css/z/za3dt0bho.css';
import '../../css/u/uayejnbpx.css';
import '../../css/k/k-k6k285a.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="etqf5iv0q"/><path class="hq4mt9hro wm-shine"/><path class="wm-k za3dt0bho"/><path class="uayejnbpx wm-a"/><path class="k-k6k285a wm-s"/><path class="rh9qoibkn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:video-plus"} {...others} />);
}

export default Component;
