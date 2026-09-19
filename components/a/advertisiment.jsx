import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tv4petbfj.css';
import '../../css/h/h51v-acsf.css';
import '../../css/y/ycfia5bpk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tv4petbfj"/><path class="h51v-acsf"/><path class="ycfia5bpk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:advertisiment"} {...others} />);
}

export default Component;
