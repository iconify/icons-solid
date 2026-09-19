import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e6ubjbbgg.css';
import '../../css/a/aznwbrbwl.css';
import '../../css/f/fco_zwbfx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e6ubjbbgg"/><path class="aznwbrbwl"/><path class="fco_zwbfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:send-to-mobile"} {...others} />);
}

export default Component;
