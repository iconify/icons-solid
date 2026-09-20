import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jh83o49ny.css';
import '../../css/a/am3dasbmk.css';
import '../../css/e/eg1tj-bbg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jh83o49ny"/><path clip-rule="evenodd" class="am3dasbmk"/><path class="eg1tj-bbg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bed-duotone"} {...others} />);
}

export default Component;
