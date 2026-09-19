import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/oford0b1p.css';
import '../../css/w/wxtjo7_gk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="oford0b1p"/><path class="wxtjo7_gk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:zodiac-scorpio"} {...others} />);
}

export default Component;
