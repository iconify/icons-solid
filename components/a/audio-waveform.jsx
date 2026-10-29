import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/ilrn2vbof.css';
import '../../css/u/u45cn9b3y.css';
import '../../css/h/h9r79lh7f.css';
import '../../css/m/mbi51pb-r.css';
import '../../css/i/iok33ibzp.css';
import '../../css/q/qzbtjqztv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ilrn2vbof wm-shadow"/><path class="u45cn9b3y"/><path class="h9r79lh7f"/><path class="mbi51pb-r"/><path class="iok33ibzp wm-shine"/><path class="qzbtjqztv wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:audio-waveform"} {...others} />);
}

export default Component;
