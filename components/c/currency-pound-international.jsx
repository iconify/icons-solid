import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f5f22zekm.css';
import '../../css/l/l3fhfibrp.css';
import '../../css/k/kau9hob4p.css';
import '../../css/h/htbamg2nv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f5f22zekm"/><path class="l3fhfibrp"/><path class="kau9hob4p"/><path class="htbamg2nv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:currency-pound-international"} {...others} />);
}

export default Component;
