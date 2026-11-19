import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zlh2grc4z.css';
import '../../css/s/s_xhc_bbj.css';
import '../../css/i/ige_o2b4i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zlh2grc4z"/><path class="s_xhc_bbj"/><path class="ige_o2b4i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:clock-pm"} {...others} />);
}

export default Component;
