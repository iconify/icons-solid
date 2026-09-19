import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/ievpasblg.css';
import '../../css/j/jruok6bwt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ievpasblg"/><path class="jruok6bwt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pi"} {...others} />);
}

export default Component;
