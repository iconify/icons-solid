import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iho0xwbvy.css';
import '../../css/y/y4n_h670s.css';
import '../../css/f/fvvvflbjm.css';
import '../../css/b/b4iy1niww.css';
import '../../css/u/up_cdgbqs.css';
import '../../css/k/kos-efsqe.css';
import '../../css/y/yxtrwipro.css';
import '../../css/p/po8vg12xr.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="iho0xwbvy"/><path class="y4n_h670s"/><path class="fvvvflbjm"/><path class="b4iy1niww"/><path class="up_cdgbqs"/><path class="kos-efsqe"/><path class="yxtrwipro"/><path class="po8vg12xr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:wolfram-wordmark"} {...others} />);
}

export default Component;
