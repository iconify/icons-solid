import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vjj1gqbjb.css';
import '../../css/g/gf8q85lcj.css';
import '../../css/k/kn847vbqs.css';
import '../../css/u/ulcrdhj0o.css';
import '../../css/i/i1dxm3b6p.css';
import '../../css/z/z5hfb3gdu.css';
import '../../css/f/ffeffz6dp.css';
import '../../css/a/ad4tpnboo.css';
import '../../css/r/r06w-vbmv.css';
import '../../css/w/wjkg0kb4g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vjj1gqbjb wm-shadow"/><path class="gf8q85lcj wm-shadow"/><path class="kn847vbqs"/><path class="ulcrdhj0o"/><path class="i1dxm3b6p"/><path class="z5hfb3gdu"/><path class="ffeffz6dp wm-shine"/><path class="ad4tpnboo wm-shine"/><path class="r06w-vbmv"/><path class="wjkg0kb4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:marigold"} {...others} />);
}

export default Component;
