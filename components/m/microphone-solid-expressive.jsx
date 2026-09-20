import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m7walnb5k.css';
import '../../css/d/dqeznobjm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="m7walnb5k"/><path class="dqeznobjm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:microphone-solid-expressive"} {...others} />);
}

export default Component;
