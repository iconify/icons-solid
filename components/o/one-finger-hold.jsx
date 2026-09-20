import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jw0ofiblw.css';
import '../../css/f/fcszt4b8v.css';
import '../../css/m/ma-7u5awq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="jw0ofiblw"/><path class="fcszt4b8v"/><path class="ma-7u5awq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:one-finger-hold"} {...others} />);
}

export default Component;
