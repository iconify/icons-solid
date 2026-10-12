import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ts0-xfmio.css';
import '../../css/w/wj_a43n2k.css';
import '../../css/o/o9i8dnbvg.css';
import '../../css/a/as18zybxe.css';
import '../../css/h/hm_nwxcmo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="ts0-xfmio"/><rect class="wj_a43n2k"/><rect class="o9i8dnbvg"/><path class="as18zybxe"/><path class="hm_nwxcmo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:replace-all"} {...others} />);
}

export default Component;
