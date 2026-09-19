import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gah4jwbcn.css';
import '../../css/n/nuktfyl9s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gah4jwbcn"/><path class="nuktfyl9s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:api-gateway"} {...others} />);
}

export default Component;
