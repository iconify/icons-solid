import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/acmys3bun.css';
import '../../css/b/b0dzodgfz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="acmys3bun"/><path class="b0dzodgfz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:trending-up"} {...others} />);
}

export default Component;
