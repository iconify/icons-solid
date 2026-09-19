import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/znqyb1tcx.css';
import '../../css/r/raxiec61z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="znqyb1tcx"/><path class="raxiec61z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shopping-bag-01"} {...others} />);
}

export default Component;
