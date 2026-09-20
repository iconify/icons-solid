import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wx9jfdcbr.css';
import '../../css/s/sos1_8pee.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wx9jfdcbr"/><path clip-rule="evenodd" class="sos1_8pee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:tv-dot-solid"} {...others} />);
}

export default Component;
