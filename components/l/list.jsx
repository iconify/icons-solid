import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/v71viub_f.css';
import '../../css/b/bcj1jp9mo.css';
import '../../css/d/dddd37lhx.css';
import '../../css/r/r6jxt2gmu.css';
import '../../css/i/isq7s6h8y.css';
import '../../css/m/mejbyebtl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="v71viub_f"/><path class="bcj1jp9mo"/><path class="dddd37lhx"/><path class="r6jxt2gmu"/><path class="isq7s6h8y"/><path class="mejbyebtl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:list"} {...others} />);
}

export default Component;
