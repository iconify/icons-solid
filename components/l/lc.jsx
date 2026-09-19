import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hrnfbeujk.css';
import '../../css/m/muvmgc77q.css';
import '../../css/p/pflnjityd.css';
import '../../css/w/waagczbtf.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="hrnfbeujk"/><path class="muvmgc77q"/><path class="pflnjityd"/><path class="waagczbtf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:lc"} {...others} />);
}

export default Component;
