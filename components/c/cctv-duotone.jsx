import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oxyvbwr6t.css';
import '../../css/o/on-rl0bcw.css';
import '../../css/q/qx95zxwhr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="oxyvbwr6t"/><path class="on-rl0bcw"/><path clip-rule="evenodd" class="qx95zxwhr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cctv-duotone"} {...others} />);
}

export default Component;
