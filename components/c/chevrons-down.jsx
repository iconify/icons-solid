import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eq4ad9wug.css';
import '../../css/s/st2f1ccqc.css';
import '../../css/r/rnsj45b4d.css';
import '../../css/k/kdpu74bzg.css';
import '../../css/d/dpbhfckuk.css';
import '../../css/r/rzy-jhbpo.css';
import '../../css/v/v2gmvdb9w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="eq4ad9wug wm-k"/><path class="st2f1ccqc wm-k"/><path class="rnsj45b4d wm-k"/><path class="kdpu74bzg wm-k"/><path class="dpbhfckuk wm-k"/><path class="rzy-jhbpo wm-k"/><path class="v2gmvdb9w wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:chevrons-down"} {...others} />);
}

export default Component;
