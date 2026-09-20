import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pzp8ogjvu.css';
import '../../css/o/o5fhfcboe.css';
import '../../css/v/v_v5z6bnm.css';
import '../../css/u/utdmog81f.css';
import '../../css/p/pw7af6bia.css';
import '../../css/h/h1cr886eo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pzp8ogjvu"/><path class="o5fhfcboe"/><path class="v_v5z6bnm"/><path class="utdmog81f"/><path class="pw7af6bia"/><path class="h1cr886eo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notebook-2-line-duotone"} {...others} />);
}

export default Component;
