import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k3f2o8bbq.css';
import '../../css/h/h4qhcub-h.css';
import '../../css/l/li_if2vdt.css';
import '../../css/j/jml_vy6xe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="k3f2o8bbq"/><circle transform="rotate(90 12 12)" class="h4qhcub-h"/><path class="li_if2vdt"/><path class="jml_vy6xe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:face-happy"} {...others} />);
}

export default Component;
