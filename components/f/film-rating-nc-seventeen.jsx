import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g2bmsqbnm.css';
import '../../css/k/k87v_vbqi.css';
import '../../css/y/y2mjsacdi.css';
import '../../css/v/vv7je2bue.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="g2bmsqbnm"/><path class="k87v_vbqi"/><path class="y2mjsacdi"/><path class="vv7je2bue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:film-rating-nc-seventeen"} {...others} />);
}

export default Component;
