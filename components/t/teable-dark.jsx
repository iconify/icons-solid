import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n4diduj_c.css';
import '../../css/j/jgbxvgbak.css';
import '../../css/y/y8dmk5bor.css';

const viewBox = {"width":25,"height":25};
const content = `<g class="ft5dv1b6b"><path class="n4diduj_c"/><path clip-rule="evenodd" class="jgbxvgbak"/><path class="y8dmk5bor"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:teable-dark"} {...others} />);
}

export default Component;
