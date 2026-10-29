import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/ear-jyb3q.css';
import '../../css/n/n_hj9vbnd.css';
import '../../css/o/om32tosyu.css';
import '../../css/k/k2m212bgo.css';
import '../../css/q/qfd-q7blm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ear-jyb3q wm-k"/><path class="n_hj9vbnd wm-a"/><path class="om32tosyu wm-shadow"/><path class="k2m212bgo wm-k"/><path class="qfd-q7blm wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:star-half-engrave"} {...others} />);
}

export default Component;
