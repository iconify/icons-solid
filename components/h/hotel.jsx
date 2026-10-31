import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/i/isar_zbpj.css';
import '../../css/i/i3cgb7bnk.css';
import '../../css/v/vtef42bmk.css';
import '../../css/y/yrdl8nb0t.css';
import '../../css/m/m5jxqbcrl.css';
import '../../css/u/u9mfu0y5d.css';
import '../../css/g/gwy7qdtlj.css';
import '../../css/z/z_333uwkq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="isar_zbpj"/><path class="i3cgb7bnk"/><path class="vtef42bmk"/><path class="wm-shine yrdl8nb0t"/><path class="m5jxqbcrl wm-k"/><path class="u9mfu0y5d wm-a"/><path class="gwy7qdtlj"/><path class="z_333uwkq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:hotel"} {...others} />);
}

export default Component;
