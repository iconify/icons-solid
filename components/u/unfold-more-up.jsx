import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s269012my.css';
import '../../css/d/do8wt1baj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="s269012my"/><path class="do8wt1baj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:unfold-more-up"} {...others} />);
}

export default Component;
