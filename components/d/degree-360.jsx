import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r4fq5_bir.css';
import '../../css/k/km1b4fqul.css';
import '../../css/w/wm9u71thl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><ellipse class="r4fq5_bir"/><path class="km1b4fqul"/><path class="wm9u71thl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:degree-360"} {...others} />);
}

export default Component;
