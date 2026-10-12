import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d22qcbcna.css';
import '../../css/w/wntw10bgk.css';
import '../../css/g/ghkrzzbyu.css';
import '../../css/a/atj_t_b3l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d22qcbcna"/><path class="wntw10bgk"/><path class="ghkrzzbyu"/><path class="atj_t_b3l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:key"} {...others} />);
}

export default Component;
