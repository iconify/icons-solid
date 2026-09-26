import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ksmeo5d2m.css';
import '../../css/t/tuuunulqy.css';
import '../../css/f/f_7mvhbyy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ksmeo5d2m"/><path class="tuuunulqy"/><path clip-rule="evenodd" class="f_7mvhbyy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-braces-outline"} {...others} />);
}

export default Component;
