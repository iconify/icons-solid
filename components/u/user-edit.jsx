import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_-gkxb7l.css';
import '../../css/v/veswyuvld.css';
import '../../css/v/vzkhs6b9b.css';
import '../../css/e/eqkcjplpx.css';
import '../../css/f/fm7sbwbij.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b_-gkxb7l"/><path class="veswyuvld"/><path class="vzkhs6b9b"/><path class="eqkcjplpx"/><path class="fm7sbwbij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:user-edit"} {...others} />);
}

export default Component;
