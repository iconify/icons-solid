import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p0f12cc6q.css';
import '../../css/j/jpol2-bmj.css';
import '../../css/e/ea2dbu9sg.css';
import '../../css/n/nc0l26bie.css';
import '../../css/n/nx6s9v-lp.css';
import '../../css/a/aequktbwp.css';
import '../../css/x/x045q6rre.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p0f12cc6q wm-shadow"/><path class="jpol2-bmj wm-shadow"/><path class="ea2dbu9sg"/><path class="nc0l26bie"/><path class="nx6s9v-lp"/><path class="aequktbwp wm-shine"/><path class="x045q6rre"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:more-vertical"} {...others} />);
}

export default Component;
