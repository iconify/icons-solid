import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/z/zrlg6ybon.css';
import '../../css/o/o276dxbuq.css';
import '../../css/v/vad1qs60d.css';
import '../../css/z/z1e61l7no.css';
import '../../css/w/w-hq1-yny.css';
import '../../css/q/q6hphqbvk.css';
import '../../css/n/nusjblbss.css';
import '../../css/z/z2pwbib3f.css';
import '../../css/b/bdgm8nrhw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="zrlg6ybon"/><path class="o276dxbuq"/><path class="vad1qs60d"/><path class="z1e61l7no"/><path class="w-hq1-yny"/><path class="q6hphqbvk"/><path class="nusjblbss"/><path class="z2pwbib3f"/><path class="bdgm8nrhw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sent-to-back"} {...others} />);
}

export default Component;
