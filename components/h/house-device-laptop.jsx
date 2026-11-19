import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p-ri8qbcz.css';
import '../../css/q/q8ro_-bdt.css';
import '../../css/k/kq9vl0iby.css';
import '../../css/y/y72_wk6ok.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p-ri8qbcz"/><path class="q8ro_-bdt"/><path class="kq9vl0iby"/><path class="y72_wk6ok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:house-device-laptop"} {...others} />);
}

export default Component;
