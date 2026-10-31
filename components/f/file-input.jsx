import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dc62hnbry.css';
import '../../css/y/ykhlkwdwp.css';
import '../../css/s/sp6sexize.css';
import '../../css/g/g-ee1nb_p.css';
import '../../css/f/fp5onfb9r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dc62hnbry wm-k"/><path class="wm-shine ykhlkwdwp"/><path class="sp6sexize wm-shine"/><path class="g-ee1nb_p wm-shine"/><path class="fp5onfb9r wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:file-input"} {...others} />);
}

export default Component;
