import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/ezmunibeu.css';
import '../../css/e/ewni57blg.css';
import '../../css/a/aphhpd_hw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ezmunibeu"/><path class="ewni57blg"/><path class="aphhpd_hw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:oil-industry"} {...others} />);
}

export default Component;
