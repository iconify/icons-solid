import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i5780hbgv.css';
import '../../css/f/f4pj4yscw.css';
import '../../css/p/pn97bjbvj.css';
import '../../css/q/qq83sseke.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="i5780hbgv"/><path clip-rule="evenodd" class="f4pj4yscw"/><path class="pn97bjbvj"/><path class="qq83sseke"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:yin-yang-symbol-flat"} {...others} />);
}

export default Component;
