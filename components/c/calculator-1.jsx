import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n3a0-aczr.css';
import '../../css/c/cfbenob4v.css';
import '../../css/d/dnm7d7bgk.css';
import '../../css/r/rm7pgj1xt.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="n3a0-aczr"/><path class="cfbenob4v"/><path class="dnm7d7bgk"/><path class="rm7pgj1xt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:calculator-1"} {...others} />);
}

export default Component;
