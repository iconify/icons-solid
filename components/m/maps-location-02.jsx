import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f-k764b6e.css';
import '../../css/f/foz6rtrvu.css';
import '../../css/a/aa_dmgbyj.css';
import '../../css/p/pjlpop4pn.css';
import '../../css/k/k1ou4_b5f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="f-k764b6e"/><path class="foz6rtrvu"/><path class="aa_dmgbyj"/><path class="pjlpop4pn"/><path class="k1ou4_b5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:maps-location-02"} {...others} />);
}

export default Component;
