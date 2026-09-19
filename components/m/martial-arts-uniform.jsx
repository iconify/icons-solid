import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n4ubhac1h.css';
import '../../css/b/baurxvh6y.css';
import '../../css/q/q9vst37-c.css';
import '../../css/u/uc6hm8b2k.css';
import '../../css/l/lxkgf6blh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="n4ubhac1h"/><path class="baurxvh6y"/><path class="q9vst37-c"/><path class="uc6hm8b2k"/><path class="lxkgf6blh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:martial-arts-uniform"} {...others} />);
}

export default Component;
