import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eq3hahmpi.css';
import '../../css/g/gtlk63bax.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="eq3hahmpi"/><path class="gtlk63bax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:olive-duotone"} {...others} />);
}

export default Component;
