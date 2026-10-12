import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ii79gpbho.css';
import '../../css/k/khdkximwp.css';
import '../../css/p/pnc3v0b1v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ii79gpbho"/><path class="khdkximwp"/><path class="pnc3v0b1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:copyright"} {...others} />);
}

export default Component;
