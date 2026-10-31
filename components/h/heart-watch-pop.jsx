import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fesy9nboh.css';
import '../../css/q/qjy5isb_h.css';
import '../../css/k/kkdr4eska.css';
import '../../css/q/q5xvfhyqv.css';
import '../../css/m/m-_1gho_k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="fesy9nboh"/><path class="qjy5isb_h"/><path class="kkdr4eska"/><path class="q5xvfhyqv"/><path class="m-_1gho_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:heart-watch-pop"} {...others} />);
}

export default Component;
