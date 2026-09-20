import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xo400fblh.css';
import '../../css/k/kt_7q50fu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xo400fblh"/><path class="kt_7q50fu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:radio4"} {...others} />);
}

export default Component;
