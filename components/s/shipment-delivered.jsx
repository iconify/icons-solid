import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bzujjfdcc.css';
import '../../css/n/neznnqosl.css';
import '../../css/k/k565uibtn.css';
import '../../css/h/hgj5ee-ee.css';
import '../../css/t/tp3kvz0bl.css';
import '../../css/v/vf4dvcc3d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bzujjfdcc"/><path class="neznnqosl"/><path class="k565uibtn"/><path class="hgj5ee-ee"/><path class="tp3kvz0bl"/><path class="vf4dvcc3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:shipment-delivered"} {...others} />);
}

export default Component;
