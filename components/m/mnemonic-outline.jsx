import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/v/vl_s_18va.css';
import '../../css/o/oergvctnh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><rect class="vl_s_18va"/><path class="oergvctnh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:mnemonic-outline"} {...others} />);
}

export default Component;
