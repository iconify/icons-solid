import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/k/kbesibb3g.css';
import '../../css/q/q0v-31bpj.css';
import '../../css/x/x2401pk9v.css';
import '../../css/g/g6li1jbuk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="kbesibb3g"/><path class="q0v-31bpj"/><circle class="x2401pk9v"/><path class="g6li1jbuk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:setting-laptop"} {...others} />);
}

export default Component;
