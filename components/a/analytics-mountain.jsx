import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vb-6nub4h.css';
import '../../css/k/ka15bjs8r.css';
import '../../css/l/llj9_4uls.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vb-6nub4h"/><path class="ka15bjs8r"/><path class="llj9_4uls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:analytics-mountain"} {...others} />);
}

export default Component;
