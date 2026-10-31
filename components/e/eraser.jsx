import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/k/k8lu-pb7b.css';
import '../../css/x/xu9hkwgfp.css';
import '../../css/c/czt14wb2g.css';
import '../../css/t/tnxgc8bjt.css';
import '../../css/f/f072aqbca.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="k8lu-pb7b wm-shadow"/><path class="wm-shadow xu9hkwgfp"/><path class="czt14wb2g"/><path class="tnxgc8bjt"/><path class="f072aqbca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:eraser"} {...others} />);
}

export default Component;
