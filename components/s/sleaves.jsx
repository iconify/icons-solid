import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/ggynh4b_z.css';
import '../../css/t/t53mxxxsl.css';
import '../../css/l/lxy-g9oau.css';
import '../../css/n/n53oc1b7f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ggynh4b_z"/><path class="t53mxxxsl"/><path class="lxy-g9oau"/><path class="n53oc1b7f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sleaves"} {...others} />);
}

export default Component;
