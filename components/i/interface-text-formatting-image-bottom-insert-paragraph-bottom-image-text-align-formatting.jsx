import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/a92jmtvlz.css';
import '../../css/q/qhuh-r65d.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="a92jmtvlz"/><rect transform="rotate(-90 7 11.5)" class="qhuh-r65d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-text-formatting-image-bottom-insert-paragraph-bottom-image-text-align-formatting"} {...others} />);
}

export default Component;
