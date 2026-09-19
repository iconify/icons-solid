import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/af2tmjb7s.css';
import '../../css/d/do8wt1baj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="af2tmjb7s"/><path class="do8wt1baj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:unfold-more-up"} {...others} />);
}

export default Component;
