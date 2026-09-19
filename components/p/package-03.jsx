import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g5uq_vbhz.css';
import '../../css/z/ztkbymavw.css';
import '../../css/e/e5s_c9bsl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g5uq_vbhz"/><path class="ztkbymavw"/><path class="e5s_c9bsl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:package-03"} {...others} />);
}

export default Component;
