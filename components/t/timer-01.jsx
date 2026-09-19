import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sreiqgbgj.css';
import '../../css/z/zdr9p-voz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sreiqgbgj"/><path class="zdr9p-voz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:timer-01"} {...others} />);
}

export default Component;
