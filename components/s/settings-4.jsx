import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6ofc9bka.css';
import '../../css/o/oyqpxeb8r.css';
import '../../css/f/fb_s8z-6h.css';
import '../../css/t/t9_vjbcvr.css';
import '../../css/b/bzw9mzo5m.css';
import '../../css/z/zg2465dnu.css';
import '../../css/u/ujrfllf0w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="a6ofc9bka"/><path class="oyqpxeb8r"/><path class="fb_s8z-6h"/><path class="t9_vjbcvr"/><path class="bzw9mzo5m"/><path class="zg2465dnu"/><path class="ujrfllf0w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:settings-4"} {...others} />);
}

export default Component;
