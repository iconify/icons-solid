import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w20fv-jhn.css';
import '../../css/u/uc98yubsj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w20fv-jhn"/><path class="uc98yubsj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hat"} {...others} />);
}

export default Component;
