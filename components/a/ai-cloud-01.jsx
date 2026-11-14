import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uj7fv0eaz.css';
import '../../css/l/l2gk9_c6z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uj7fv0eaz"/><path class="l2gk9_c6z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-cloud-01"} {...others} />);
}

export default Component;
