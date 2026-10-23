import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fhmp2m6dp.css';
import '../../css/i/ij54um8wb.css';
import '../../css/x/xtyg9db9j.css';
import '../../css/f/fjo9g4y2r.css';
import '../../css/t/tr7b4vz1t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fhmp2m6dp"/><path class="ij54um8wb"/><path class="xtyg9db9j"/><path class="fjo9g4y2r"/><path class="tr7b4vz1t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-tablet-warning"} {...others} />);
}

export default Component;
