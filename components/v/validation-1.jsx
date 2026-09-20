import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/e/eldfi2bto.css';
import '../../css/n/n3wlgpj-n.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="eldfi2bto"/><path class="n3wlgpj-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:validation-1"} {...others} />);
}

export default Component;
