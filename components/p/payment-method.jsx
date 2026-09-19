import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/dqoyheszf.css';
import '../../css/b/bnocezqbt.css';
import '../../css/z/zvlywgbxr.css';
import '../../css/u/u9mcuywun.css';
import '../../css/e/erb2_xbut.css';
import '../../css/u/ug5-wlbch.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="dqoyheszf"/><path class="bnocezqbt"/><path class="zvlywgbxr"/><path class="u9mcuywun"/><path class="erb2_xbut"/><path class="ug5-wlbch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:payment-method"} {...others} />);
}

export default Component;
