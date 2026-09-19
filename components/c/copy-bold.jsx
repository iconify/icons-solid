import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pet2pre7u.css';
import '../../css/m/m691cpbdm.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="pet2pre7u"/><path class="m691cpbdm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:copy-bold"} {...others} />);
}

export default Component;
