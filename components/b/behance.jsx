import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hv5ri9aus.css';
import '../../css/y/y_5k0zbsx.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="cuyn6tgcc"><path class="hv5ri9aus"/><path class="y_5k0zbsx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:behance"} {...others} />);
}

export default Component;
