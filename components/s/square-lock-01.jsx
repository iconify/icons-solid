import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q37yj5bai.css';
import '../../css/z/zos5uc49n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q37yj5bai"/><path class="zos5uc49n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:square-lock-01"} {...others} />);
}

export default Component;
