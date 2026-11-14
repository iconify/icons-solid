import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kvu6erb4g.css';
import '../../css/k/k1ehdeb1z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kvu6erb4g"/><path class="k1ehdeb1z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:edit-multiple-01"} {...others} />);
}

export default Component;
