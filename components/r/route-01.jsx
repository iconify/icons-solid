import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/ugw1omula.css';
import '../../css/t/tke4h5b0x.css';
import '../../css/n/nksj0vbih.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="ugw1omula"/><circle class="tke4h5b0x"/><path class="nksj0vbih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:route-01"} {...others} />);
}

export default Component;
