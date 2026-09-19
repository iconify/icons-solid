import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jovek0baj.css';
import '../../css/m/mmdrd1b9q.css';
import '../../css/k/kvv6k2b5r.css';
import '../../css/s/s_faj7bmu.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="jovek0baj"/><path class="mmdrd1b9q"/><path class="kvv6k2b5r"/><path class="s_faj7bmu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:sun-behind-large-cloud"} {...others} />);
}

export default Component;
