import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vn_io3blr.css';
import '../../css/n/n0c_0xreh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vn_io3blr"/><path class="n0c_0xreh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:patient"} {...others} />);
}

export default Component;
