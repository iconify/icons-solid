import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/t/toalvz3ue.css';
import '../../css/i/itiauxbzq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="toalvz3ue"/><path class="itiauxbzq wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:align-right"} {...others} />);
}

export default Component;
