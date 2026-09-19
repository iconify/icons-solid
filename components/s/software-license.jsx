import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v-zj4qbyf.css';
import '../../css/g/gx4bnzbrp.css';
import '../../css/j/j1fvgp9vr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v-zj4qbyf"/><path class="gx4bnzbrp"/><path class="j1fvgp9vr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:software-license"} {...others} />);
}

export default Component;
