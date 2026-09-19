import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/ds94pmb3e.css';
import '../../css/w/ww2v-3bfe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ds94pmb3e"/><path class="ww2v-3bfe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:receipt"} {...others} />);
}

export default Component;
