import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ojsfk4b1j.css';
import '../../css/j/j7ju3rbah.css';
import '../../css/e/ew1u15bsk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ojsfk4b1j"/><path class="j7ju3rbah"/><path class="ew1u15bsk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:shipment-hook"} {...others} />);
}

export default Component;
