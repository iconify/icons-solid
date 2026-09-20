import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/l/l04re6b8w.css';
import '../../css/f/f7d0b9b0h.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="l04re6b8w"/><path class="f7d0b9b0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:paint-roller"} {...others} />);
}

export default Component;
