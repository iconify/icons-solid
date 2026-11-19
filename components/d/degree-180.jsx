import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t23j8yb2w.css';
import '../../css/u/u_o--dncs.css';
import '../../css/e/eutlxtfsy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><ellipse class="t23j8yb2w"/><path class="u_o--dncs"/><path class="eutlxtfsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:degree-180"} {...others} />);
}

export default Component;
