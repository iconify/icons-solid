import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/blil4ds5p.css';
import '../../css/c/cwfl97bsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="blil4ds5p"/><path class="cwfl97bsr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:zodiac-ophiuchus"} {...others} />);
}

export default Component;
