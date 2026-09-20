import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m8-7_wznb.css';
import '../../css/o/ookt36b8p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="m8-7_wznb"/><path class="ookt36b8p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notebook-minimalistic-line-duotone"} {...others} />);
}

export default Component;
