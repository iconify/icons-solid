import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/s/snefp2m2h.css';
import '../../css/v/vbexpibma.css';
import '../../css/m/mgyyx5bye.css';
import '../../css/p/p9-zrkb4g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="snefp2m2h"/><path class="vbexpibma"/><path class="mgyyx5bye"/><path class="p9-zrkb4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:repeat-circle"} {...others} />);
}

export default Component;
