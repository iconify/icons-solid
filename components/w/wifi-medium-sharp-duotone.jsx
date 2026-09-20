import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/mc8rtl3wh.css';
import '../../css/b/b8uh54bhe.css';
import '../../css/c/chh9m8bfh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="mc8rtl3wh"/><path class="b8uh54bhe"/><path class="chh9m8bfh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:wifi-medium-sharp-duotone"} {...others} />);
}

export default Component;
