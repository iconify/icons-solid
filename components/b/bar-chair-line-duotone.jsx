import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xineyrtff.css';
import '../../css/r/rw1sm-ddm.css';
import '../../css/e/ecv2oy3sx.css';
import '../../css/p/pxcn82x1k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xineyrtff"/><path class="rw1sm-ddm"/><path class="ecv2oy3sx"/><path class="pxcn82x1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bar-chair-line-duotone"} {...others} />);
}

export default Component;
