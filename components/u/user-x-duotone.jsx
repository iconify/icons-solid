import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x507mczyr.css';
import '../../css/m/mkfkj9b3c.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="x507mczyr"/><path class="mkfkj9b3c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:user-x-duotone"} {...others} />);
}

export default Component;
