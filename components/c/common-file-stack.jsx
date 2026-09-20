import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yzazjabqu.css';
import '../../css/j/jl56ebcvm.css';
import '../../css/h/hihgy7bim.css';
import '../../css/a/akq5kg7hp.css';
import '../../css/a/aug8zhbvc.css';
import '../../css/e/e117imr6b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yzazjabqu"/><path class="jl56ebcvm"/><path class="hihgy7bim"/><path class="akq5kg7hp"/><path class="aug8zhbvc"/><path class="e117imr6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:common-file-stack"} {...others} />);
}

export default Component;
