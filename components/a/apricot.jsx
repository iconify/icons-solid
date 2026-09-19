import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h9f8jm2-z.css';
import '../../css/h/hw1b44bxw.css';
import '../../css/d/d9i98uvix.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="h9f8jm2-z"/><path class="hw1b44bxw"/><path class="d9i98uvix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:apricot"} {...others} />);
}

export default Component;
