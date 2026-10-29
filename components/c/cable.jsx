import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrpovl1tb.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/dbm_cqbjk.css';
import '../../css/x/xlit3qbjb.css';
import '../../css/i/isskvwbqn.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gtnh5k0ll.css';
import '../../css/k/ks-y6ebfz.css';
import '../../css/d/dei3e2bti.css';
import '../../css/b/bhiwnla8l.css';
import '../../css/c/c87o9hjkm.css';
import '../../css/s/sa978hbve.css';
import '../../css/y/yw3q-bb-q.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGxtXrePMn" class="nrpovl1tb"/></defs><g class="t_2lkqbxb"><path class="dbm_cqbjk wm-shadow"/><path class="xlit3qbjb"/><path class="isskvwbqn"/><use href="#SVGxtXrePMn" class="d2kvgvbvc"/><path class="gtnh5k0ll"/><use href="#SVGxtXrePMn" class="d2kvgvbvc"/><path class="ks-y6ebfz"/><path class="dei3e2bti"/><path class="bhiwnla8l"/><path class="c87o9hjkm"/><path class="sa978hbve wm-shine"/><path class="wm-deco yw3q-bb-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:cable"} {...others} />);
}

export default Component;
