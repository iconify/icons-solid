import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/ncir--e1f.css';
import '../../css/q/q1zl0lc0k.css';
import '../../css/s/s7i40lndy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ncir--e1f"/><path class="q1zl0lc0k"/><path class="s7i40lndy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-art"} {...others} />);
}

export default Component;
