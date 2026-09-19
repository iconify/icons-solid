import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/ireet7bnu.css';
import '../../css/a/avtsxhbov.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ireet7bnu"/><path class="avtsxhbov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:trending-up-down"} {...others} />);
}

export default Component;
