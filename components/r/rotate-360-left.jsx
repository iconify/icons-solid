import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/flx_1qb4h.css';
import '../../css/y/y4-kt_b-j.css';
import '../../css/v/vzmvmzs_c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><ellipse class="flx_1qb4h"/><path class="y4-kt_b-j"/><path class="vzmvmzs_c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:rotate-360-left"} {...others} />);
}

export default Component;
