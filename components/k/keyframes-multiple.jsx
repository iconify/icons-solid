import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cgh6afzdr.css';
import '../../css/w/wr3ilibzg.css';
import '../../css/q/qg6wjyjbe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cgh6afzdr"/><path class="wr3ilibzg"/><path class="qg6wjyjbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:keyframes-multiple"} {...others} />);
}

export default Component;
