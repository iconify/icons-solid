import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ni5yzcc4r.css';
import '../../css/n/nha6of4rc.css';
import '../../css/m/mi17ykb8a.css';
import '../../css/r/rgfcefvyl.css';
import '../../css/t/tv-ok3jcg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ni5yzcc4r"/><path class="nha6of4rc"/><path class="mi17ykb8a"/><path class="rgfcefvyl"/><path class="tv-ok3jcg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:eraser-sparkle"} {...others} />);
}

export default Component;
