import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rf1kjg-dr.css';
import '../../css/z/zpe12bbzy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="rf1kjg-dr"/><path class="zpe12bbzy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:link-expressive"} {...others} />);
}

export default Component;
