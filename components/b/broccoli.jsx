import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ekevpmbzx.css';
import '../../css/h/he_ze3b7j.css';
import '../../css/e/e-6ug8bzk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ekevpmbzx"/><path class="he_ze3b7j"/><path class="e-6ug8bzk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:broccoli"} {...others} />);
}

export default Component;
