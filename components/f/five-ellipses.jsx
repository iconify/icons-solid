import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/nlm97hbju.css';
import '../../css/f/f28gxdvxj.css';
import '../../css/h/hdcg4bb2o.css';
import '../../css/f/fl665n9ss.css';
import '../../css/v/v1pe1km5e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="nlm97hbju"/><path class="f28gxdvxj"/><path class="hdcg4bb2o"/><path class="fl665n9ss"/><path class="v1pe1km5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:five-ellipses"} {...others} />);
}

export default Component;
