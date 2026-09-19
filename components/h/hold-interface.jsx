import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/j/jnakdhbal.css';
import '../../css/r/rf0doac_z.css';
import '../../css/l/lbg5hjbdn.css';
import '../../css/r/rf1fvibfz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="jnakdhbal"/><path class="rf0doac_z"/><rect class="lbg5hjbdn"/><path class="rf1fvibfz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hold-interface"} {...others} />);
}

export default Component;
