import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vuwlpvp2m.css';
import '../../css/d/dj37ziz5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vuwlpvp2m"/><path class="dj37ziz5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cliparts"} {...others} />);
}

export default Component;
