import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/ldvprfbxo.css';
import '../../css/v/v_o86oxzq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ldvprfbxo"/><path class="v_o86oxzq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:robot-01"} {...others} />);
}

export default Component;
