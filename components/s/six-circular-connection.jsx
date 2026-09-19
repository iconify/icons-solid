import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/e4gpj0b1e.css';
import '../../css/g/g-fv8-n7n.css';
import '../../css/a/a_3oybc9z.css';
import '../../css/z/znq9kpbcu.css';
import '../../css/t/tg4pb10ss.css';
import '../../css/g/gkxo_rb4t.css';
import '../../css/v/vfkibrbfi.css';
import '../../css/y/yozc07cpt.css';
import '../../css/r/r2b3htb0e.css';
import '../../css/k/ko4dz8bwi.css';
import '../../css/b/bmpvt4b1w.css';
import '../../css/s/s266ujh5n.css';
import '../../css/e/eivqtzbza.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="e4gpj0b1e"/><path class="g-fv8-n7n"/><path class="a_3oybc9z"/><path class="znq9kpbcu"/><path class="tg4pb10ss"/><path class="gkxo_rb4t"/><path class="vfkibrbfi"/><path class="yozc07cpt"/><path class="r2b3htb0e"/><path class="ko4dz8bwi"/><path class="bmpvt4b1w"/><path class="s266ujh5n"/><path class="eivqtzbza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:six-circular-connection"} {...others} />);
}

export default Component;
