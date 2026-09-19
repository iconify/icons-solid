import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/ig7s_5_sl.css';
import '../../css/z/zciqlmbzf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ig7s_5_sl"/><path class="zciqlmbzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-scheduling"} {...others} />);
}

export default Component;
