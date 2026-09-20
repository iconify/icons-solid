import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gfz8yd99h.css';
import '../../css/v/vto9q9z-a.css';
import '../../css/g/g4m9b9nye.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gfz8yd99h"/><path class="vto9q9z-a"/><path class="g4m9b9nye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:touch-id"} {...others} />);
}

export default Component;
