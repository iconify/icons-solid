import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t17c4-btv.css';
import '../../css/k/kc3gejgaa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="t17c4-btv"/><path class="kc3gejgaa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:camera-off-02"} {...others} />);
}

export default Component;
