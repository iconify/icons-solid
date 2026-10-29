import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mzwk4_bwa.css';
import '../../css/n/nys28xbkx.css';
import '../../css/p/pwvf_k0fm.css';
import '../../css/d/d9wk5wbku.css';
import '../../css/i/ie18tzvon.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mzwk4_bwa wm-k"/><path class="nys28xbkx wm-k"/><path class="pwvf_k0fm wm-k"/><path class="d9wk5wbku wm-shine"/><path class="ie18tzvon wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:help-circle"} {...others} />);
}

export default Component;
