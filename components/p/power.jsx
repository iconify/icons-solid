import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nda4ebcoc.css';
import '../../css/t/t9nly_bze.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="nda4ebcoc"/><rect class="t9nly_bze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:power"} {...others} />);
}

export default Component;
