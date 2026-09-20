import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dgf-cvvxa.css';
import '../../css/q/q5ovy0bkw.css';
import '../../css/g/gka1v-_ox.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="dgf-cvvxa"/><path class="q5ovy0bkw"/><path class="gka1v-_ox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panels-top-left-bold-duotone"} {...others} />);
}

export default Component;
