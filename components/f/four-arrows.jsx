import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/uj5tubcvw.css';
import '../../css/j/jb5_c0nah.css';
import '../../css/q/qsirhpcjy.css';
import '../../css/u/uce_dv5xt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="uj5tubcvw"/><path class="jb5_c0nah"/><path class="qsirhpcjy"/><path class="uce_dv5xt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:four-arrows"} {...others} />);
}

export default Component;
