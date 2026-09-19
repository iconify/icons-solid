import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m7vi1cvwd.css';
import '../../css/x/x5yo2db5t.css';
import '../../css/g/g8e6vqbev.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="m7vi1cvwd"/><path class="x5yo2db5t"/><path class="g8e6vqbev"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:theater"} {...others} />);
}

export default Component;
