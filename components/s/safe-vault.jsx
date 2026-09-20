import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cx_2aibqr.css';
import '../../css/s/shcdyw0zf.css';
import '../../css/l/l3677ab9t.css';
import '../../css/s/sylkmyb0t.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="cx_2aibqr"/><path clip-rule="evenodd" class="shcdyw0zf"/><path class="l3677ab9t"/><path class="sylkmyb0t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:safe-vault"} {...others} />);
}

export default Component;
