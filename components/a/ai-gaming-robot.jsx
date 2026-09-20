import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/s/sb91s1bok.css';
import '../../css/w/wupeggpqh.css';
import '../../css/g/g8js72ttb.css';
import '../../css/r/rcjq3abea.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="sb91s1bok"/><path class="wupeggpqh"/><path class="g8js72ttb"/><path class="rcjq3abea"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:ai-gaming-robot"} {...others} />);
}

export default Component;
