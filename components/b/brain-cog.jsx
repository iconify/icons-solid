import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g-jmmuyyr.css';
import '../../css/s/s5ygqebvo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g-jmmuyyr"/><path class="s5ygqebvo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:brain-cog"} {...others} />);
}

export default Component;
