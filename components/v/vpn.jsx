import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zu04dgbjy.css';
import '../../css/v/vj9avtbxz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zu04dgbjy"/><path class="vj9avtbxz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:vpn"} {...others} />);
}

export default Component;
