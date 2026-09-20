import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rgnd6_bms.css';
import '../../css/w/wrd15gbfv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="rgnd6_bms"/><path class="wrd15gbfv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:escalator-arrow-down-left"} {...others} />);
}

export default Component;
