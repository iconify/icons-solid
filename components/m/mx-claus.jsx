import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_b7bp95k.css';
import '../../css/e/eebcn6x6l.css';
import '../../css/w/wtnup_bed.css';
import '../../css/z/z2i-5vd-g.css';
import '../../css/i/i3dgn7bdk.css';
import '../../css/a/apef9ubwy.css';
import '../../css/g/gbabfkgyn.css';
import '../../css/w/w-va4-gjj.css';
import '../../css/m/mnr-rkb6t.css';
import '../../css/m/m0jdy2qdd.css';
import '../../css/n/n8et0rbmf.css';
import '../../css/s/s0z9pibuq.css';
import '../../css/n/n853o3bvx.css';
import '../../css/e/ewtea4dwu.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="p_b7bp95k"/><path class="eebcn6x6l"/><path class="wtnup_bed"/><path class="z2i-5vd-g"/><path class="i3dgn7bdk"/><path class="apef9ubwy"/><path class="gbabfkgyn"/><path class="w-va4-gjj"/><path class="mnr-rkb6t"/><path class="m0jdy2qdd"/><path class="n8et0rbmf"/><path class="s0z9pibuq"/><path class="n853o3bvx"/><path class="ewtea4dwu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:mx-claus"} {...others} />);
}

export default Component;
