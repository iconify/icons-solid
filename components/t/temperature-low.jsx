import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/x3ia_ld1j.css';
import '../../css/t/tb1x0fbkl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="x3ia_ld1j"/><path class="tb1x0fbkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:temperature-low"} {...others} />);
}

export default Component;
