import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n-oobxf0t.css';
import '../../css/t/tr8xe4bes.css';
import '../../css/d/dmeshi2wj.css';
import '../../css/z/zapwtgb_o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n-oobxf0t"/><path class="tr8xe4bes"/><path class="dmeshi2wj"/><path class="zapwtgb_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:image"} {...others} />);
}

export default Component;
