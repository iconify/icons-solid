import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m7ztwobiu.css';
import '../../css/x/x83f30n5v.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="m7ztwobiu"/><path class="x83f30n5v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:backspace-reverse"} {...others} />);
}

export default Component;
