import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rf6gux1us.css';
import '../../css/e/ern0ub08k.css';
import '../../css/m/m_yra-oga.css';
import '../../css/w/w6y3w3bcq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="rf6gux1us"/><path clip-rule="evenodd" class="ern0ub08k"/><path clip-rule="evenodd" class="m_yra-oga"/><path clip-rule="evenodd" class="w6y3w3bcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:headphones-round-sound-bold"} {...others} />);
}

export default Component;
