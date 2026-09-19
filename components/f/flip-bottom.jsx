import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pp9mr1bgw.css';
import '../../css/l/lwsdkybjd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="pp9mr1bgw"/><path class="lwsdkybjd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:flip-bottom"} {...others} />);
}

export default Component;
