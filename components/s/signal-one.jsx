import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q812q6b2h.css';
import '../../css/e/ewr58kbsd.css';
import '../../css/f/fm1fuhbkg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="q812q6b2h"/><path class="ewr58kbsd"/><path class="fm1fuhbkg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:signal-one"} {...others} />);
}

export default Component;
