import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j5l0ophas.css';
import '../../css/l/le-2qlo8j.css';
import '../../css/a/aq_hwzb3g.css';
import '../../css/w/wbv-tibxs.css';
import '../../css/b/bd5n0i_hu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j5l0ophas"/><path class="le-2qlo8j"/><circle class="aq_hwzb3g"/><circle class="wbv-tibxs"/><path class="bd5n0i_hu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:forklift"} {...others} />);
}

export default Component;
