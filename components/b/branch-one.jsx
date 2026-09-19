import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/b8cd-f9hp.css';
import '../../css/e/encfg6bqs.css';
import '../../css/c/c_o3rdbot.css';
import '../../css/u/uj7wi5bqw.css';
import '../../css/j/jwtbl_b-h.css';
import '../../css/u/u4wi5abjx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="b8cd-f9hp"/><rect class="encfg6bqs"/><path class="c_o3rdbot"/><rect class="uj7wi5bqw"/><rect class="jwtbl_b-h"/><rect class="u4wi5abjx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:branch-one"} {...others} />);
}

export default Component;
