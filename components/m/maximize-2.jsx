import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ex_25ld0l.css';
import '../../css/f/fqsgzo2im.css';
import '../../css/c/ckd-9bcnj.css';
import '../../css/x/xa7k5db6o.css';
import '../../css/a/an6q1eb2e.css';
import '../../css/e/ertubyv3n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ex_25ld0l wm-k"/><path class="fqsgzo2im wm-k"/><path class="ckd-9bcnj wm-k"/><path class="wm-a xa7k5db6o"/><path class="an6q1eb2e wm-a"/><path class="ertubyv3n wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:maximize-2"} {...others} />);
}

export default Component;
