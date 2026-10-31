import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/e/eqvob8bxy.css';
import '../../css/a/a7cl-8b-u.css';
import '../../css/p/ploa71bki.css';
import '../../css/k/klzcy0ogc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="eqvob8bxy"/><path class="a7cl-8b-u wm-k"/><path class="ploa71bki wm-a"/><path class="klzcy0ogc wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:anchor"} {...others} />);
}

export default Component;
