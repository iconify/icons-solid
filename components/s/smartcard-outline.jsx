import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/o/of_ppxbni.css';
import '../../css/l/l_z7clbyi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="of_ppxbni"/><rect class="l_z7clbyi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:smartcard-outline"} {...others} />);
}

export default Component;
