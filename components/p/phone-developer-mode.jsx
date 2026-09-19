import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/ulecmzugy.css';
import '../../css/u/u80ie7bqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ulecmzugy"/><path class="u80ie7bqq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:phone-developer-mode"} {...others} />);
}

export default Component;
