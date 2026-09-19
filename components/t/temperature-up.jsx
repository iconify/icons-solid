import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dp5_d14ec.css';
import '../../css/i/i602ejj_w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dp5_d14ec"/><path class="i602ejj_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:temperature-up"} {...others} />);
}

export default Component;
