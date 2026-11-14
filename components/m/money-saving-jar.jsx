import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/ml8-7_rvn.css';
import '../../css/a/aymf1-buu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ml8-7_rvn"/><path class="aymf1-buu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:money-saving-jar"} {...others} />);
}

export default Component;
