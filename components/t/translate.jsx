import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/avm7xkbly.css';
import '../../css/q/qpr5j8bpt.css';
import '../../css/l/lc328beab.css';
import '../../css/c/c3chzcpsd.css';
import '../../css/c/cfnlf1fyi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="avm7xkbly"/><path class="qpr5j8bpt"/><path class="lc328beab"/><path class="c3chzcpsd"/><path class="cfnlf1fyi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:translate"} {...others} />);
}

export default Component;
