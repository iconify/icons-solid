import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/p/pfayoccfo.css';
import '../../css/e/ez3-mqhsi.css';
import '../../css/i/i45uuep6s.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="pfayoccfo"/><path class="ez3-mqhsi"/><path class="i45uuep6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:tent"} {...others} />);
}

export default Component;
