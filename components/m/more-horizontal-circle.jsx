import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ii79gpbho.css';
import '../../css/k/khdkximwp.css';
import '../../css/y/y8ipqgbmt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ii79gpbho"/><path class="khdkximwp"/><path class="y8ipqgbmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:more-horizontal-circle"} {...others} />);
}

export default Component;
