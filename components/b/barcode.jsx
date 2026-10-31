import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/k/kmy89reyg.css';
import '../../css/k/kt3ezcblq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="kmy89reyg"/><path class="kt3ezcblq wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:barcode"} {...others} />);
}

export default Component;
