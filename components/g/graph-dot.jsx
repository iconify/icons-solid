import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/a/alc_zzbzf.css';
import '../../css/r/r2fuwyb8o.css';
import '../../css/q/q9kpkebqm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="alc_zzbzf"/><path class="r2fuwyb8o"/><path class="q9kpkebqm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:graph-dot"} {...others} />);
}

export default Component;
