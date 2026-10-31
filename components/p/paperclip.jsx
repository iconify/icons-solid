import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/n/ns9l4jexk.css';
import '../../css/m/m1ej8ab-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ns9l4jexk"/><path class="m1ej8ab-d wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:paperclip"} {...others} />);
}

export default Component;
