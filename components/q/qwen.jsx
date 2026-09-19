import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fmeovypeb.css';
import '../../css/k/kjeii5b8e.css';
import '../../css/l/lrd4lfbqv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fmeovypeb"/><path class="kjeii5b8e"/><path class="lrd4lfbqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:qwen"} {...others} />);
}

export default Component;
