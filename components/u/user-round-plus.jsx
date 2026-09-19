import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/egj1vee1s.css';
import '../../css/y/y6p374mum.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="egj1vee1s"/><path class="y6p374mum"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-round-plus"} {...others} />);
}

export default Component;
