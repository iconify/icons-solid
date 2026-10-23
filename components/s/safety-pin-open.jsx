import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tet1un_1z.css';
import '../../css/h/hdpc43bye.css';
import '../../css/h/hocn3qtin.css';
import '../../css/k/k-vcg4kzc.css';
import '../../css/t/ti_gj_bqs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="rotate(135.7 4.73 19.31)" class="tet1un_1z"/><path class="hdpc43bye"/><path class="hocn3qtin"/><circle transform="rotate(135.7 4.73 19.31)" class="k-vcg4kzc"/><path class="ti_gj_bqs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:safety-pin-open"} {...others} />);
}

export default Component;
