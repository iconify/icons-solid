import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u9vz9ubvn.css';
import '../../css/g/g5pwokrqp.css';
import '../../css/k/ka8qthboq.css';
import '../../css/k/kh418hbwm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="u9vz9ubvn"/><path class="g5pwokrqp"/><path class="ka8qthboq"/><path class="kh418hbwm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:aquarium"} {...others} />);
}

export default Component;
