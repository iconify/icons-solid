import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ii79gpbho.css';
import '../../css/i/i_b5r9-6s.css';
import '../../css/m/mr64pobec.css';
import '../../css/k/khdkximwp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ii79gpbho"/><path class="i_b5r9-6s"/><path class="mr64pobec"/><path class="khdkximwp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:currency-pab-circle"} {...others} />);
}

export default Component;
