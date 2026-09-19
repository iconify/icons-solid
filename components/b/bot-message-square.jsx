import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pzh2tq24z.css';
import '../../css/n/n2ecycc9l.css';
import '../../css/u/urhq_0hak.css';
import '../../css/p/parq8fbol.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="pzh2tq24z"/><path class="n2ecycc9l"/><path class="urhq_0hak"/><path class="parq8fbol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bot-message-square"} {...others} />);
}

export default Component;
