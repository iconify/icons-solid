import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f-xz292fb.css';
import '../../css/j/jusks7gbw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="f-xz292fb"/><path class="jusks7gbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sperm"} {...others} />);
}

export default Component;
