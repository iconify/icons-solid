import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/l2zme6t-z.css';
import '../../css/u/u8lz7gbwk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="l2zme6t-z"/><path class="u8lz7gbwk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:dump-truck"} {...others} />);
}

export default Component;
