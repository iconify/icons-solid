import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qghi1b7fi.css';
import '../../css/t/t4n1jkvms.css';
import '../../css/m/mja2l3bko.css';
import '../../css/q/qz2_6rb3h.css';
import '../../css/d/d0194gtek.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qghi1b7fi"/><path class="t4n1jkvms"/><path class="mja2l3bko"/><path class="qz2_6rb3h"/><path class="d0194gtek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:chicken"} {...others} />);
}

export default Component;
