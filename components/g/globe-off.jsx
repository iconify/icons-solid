import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f8o0ncbxg.css';
import '../../css/n/nns7u-bms.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f8o0ncbxg"/><path class="nns7u-bms"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:globe-off"} {...others} />);
}

export default Component;
