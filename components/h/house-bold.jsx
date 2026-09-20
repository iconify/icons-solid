import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a2kliubwi.css';
import '../../css/n/n7_idhb2y.css';
import '../../css/g/gri8csbwd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="a2kliubwi"/><path clip-rule="evenodd" class="n7_idhb2y"/><path clip-rule="evenodd" class="gri8csbwd"/><path clip-rule="evenodd" class="n7_idhb2y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:house-bold"} {...others} />);
}

export default Component;
