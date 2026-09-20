import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/dj05c4b-z.css';
import '../../css/d/dgmnhqb1q.css';
import '../../css/x/xcyk673ka.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="dj05c4b-z"/><path class="dgmnhqb1q"/><path class="xcyk673ka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:thermometer-sun-sharp-duotone"} {...others} />);
}

export default Component;
