import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/x4-2s2buw.css';
import '../../css/k/k5_jau_5m.css';
import '../../css/s/s6lr-i_gj.css';
import '../../css/y/y8yv5yctb.css';
import '../../css/h/hb42dd7sx.css';
import '../../css/o/o5dx8pbdz.css';
import '../../css/x/x4vt-dgcn.css';
import '../../css/i/iqhjyybzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow x4-2s2buw"/><path class="k5_jau_5m"/><path class="s6lr-i_gj"/><path class="y8yv5yctb"/><path class="hb42dd7sx"/><path class="o5dx8pbdz wm-shine"/><path class="wm-deco x4vt-dgcn"/><path class="iqhjyybzt wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:golf"} {...others} />);
}

export default Component;
