import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/to5dmvbxc.css';
import '../../css/p/plcx77r6t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="to5dmvbxc"/><path class="plcx77r6t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-phone-01"} {...others} />);
}

export default Component;
