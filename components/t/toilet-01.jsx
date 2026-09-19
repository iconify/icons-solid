import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rg7_ebbre.css';
import '../../css/u/u66c0vbaa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rg7_ebbre"/><path class="u66c0vbaa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:toilet-01"} {...others} />);
}

export default Component;
