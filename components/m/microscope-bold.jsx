import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/owgq43b1u.css';
import '../../css/l/lmb9nrbxa.css';
import '../../css/g/gwkwatchw.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="owgq43b1u"/><path clip-rule="evenodd" class="lmb9nrbxa"/><path class="gwkwatchw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:microscope-bold"} {...others} />);
}

export default Component;
