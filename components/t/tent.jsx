import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bc9fff1ow.css';
import '../../css/t/trbgbga2f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bc9fff1ow"/><path class="trbgbga2f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tent"} {...others} />);
}

export default Component;
