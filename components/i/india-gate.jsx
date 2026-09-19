import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/serts5kow.css';
import '../../css/p/p8hixpb1h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="serts5kow"/><path class="p8hixpb1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:india-gate"} {...others} />);
}

export default Component;
