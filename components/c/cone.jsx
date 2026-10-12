import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qj_l62vhd.css';
import '../../css/w/wvt2jtbkd.css';
import '../../css/z/z7pc2ihba.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><ellipse class="qj_l62vhd"/><path class="wvt2jtbkd"/><ellipse class="z7pc2ihba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cone"} {...others} />);
}

export default Component;
