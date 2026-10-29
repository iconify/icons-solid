import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f24-gqbst.css';
import '../../css/r/r-nr70vpq.css';
import '../../css/m/m31z5l3iz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="f24-gqbst"/><path class="r-nr70vpq wm-a"/><path class="m31z5l3iz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mandarin-orange"} {...others} />);
}

export default Component;
