import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ubtt0-b3g.css';
import '../../css/d/du55hrmeb.css';
import '../../css/v/vt00uqbmj.css';
import '../../css/b/b1hs--7gh.css';
import '../../css/t/t-dv3dbyc.css';
import '../../css/t/to5_hpm1w.css';
import '../../css/k/kdj4d0wwt.css';
import '../../css/g/gfbc12aky.css';
import '../../css/z/zj9lv8b2i.css';
import '../../css/m/md07lkssk.css';
import '../../css/t/tfxtefb8p.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ubtt0-b3g"/><path class="du55hrmeb"/><path class="vt00uqbmj"/><path class="b1hs--7gh"/><path class="t-dv3dbyc"/><g class="to5_hpm1w"><path class="kdj4d0wwt"/><path class="gfbc12aky"/><path class="zj9lv8b2i"/><path class="md07lkssk"/><path class="tfxtefb8p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:toolbox"} {...others} />);
}

export default Component;
