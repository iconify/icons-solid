import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/k/k6v14padp.css';
import '../../css/m/mrkqmab9s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="k6v14padp"/><path class="mrkqmab9s wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:align-left"} {...others} />);
}

export default Component;
