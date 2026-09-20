import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tm-tivb_f.css';
import '../../css/v/v3b99ibts.css';
import '../../css/d/dvk66nb6k.css';
import '../../css/h/h9ohkzbjg.css';
import '../../css/v/v-z-bsb9u.css';
import '../../css/m/muuwgccts.css';
import '../../css/c/cslzysbmb.css';
import '../../css/q/qmqf53sgy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tm-tivb_f"/><path class="v3b99ibts"/><path class="dvk66nb6k"/><path class="h9ohkzbjg"/><path class="v-z-bsb9u"/><path class="muuwgccts"/><path class="cslzysbmb"/><path class="qmqf53sgy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:design-tool-pencil-ruler"} {...others} />);
}

export default Component;
