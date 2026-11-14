import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k3fjxabte.css';
import '../../css/w/w2fjagbrz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k3fjxabte"/><path class="w2fjagbrz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:archive-arrow-up"} {...others} />);
}

export default Component;
