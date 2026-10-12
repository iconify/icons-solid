import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sjldjdyqs.css';
import '../../css/o/o5jtyekak.css';
import '../../css/b/blwm_i0-s.css';
import '../../css/d/dlz_dxnme.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sjldjdyqs"/><path class="o5jtyekak"/><path class="blwm_i0-s"/><path class="dlz_dxnme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:trailer-duotone"} {...others} />);
}

export default Component;
