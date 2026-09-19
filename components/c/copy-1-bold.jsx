import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xiicuyp0z.css';
import '../../css/o/ohm-el9zo.css';
import '../../css/u/uycqi9b6u.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="xiicuyp0z"/><path class="ohm-el9zo"/><path class="uycqi9b6u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:copy-1-bold"} {...others} />);
}

export default Component;
