import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/opn8sobao.css';
import '../../css/m/mh006xb8p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="opn8sobao"/><path class="mh006xb8p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:augmented-reality"} {...others} />);
}

export default Component;
