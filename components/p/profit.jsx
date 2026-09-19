import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/navarybyr.css';
import '../../css/v/vg8rqdcki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="navarybyr"/><path class="vg8rqdcki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:profit"} {...others} />);
}

export default Component;
