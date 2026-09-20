import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i7n49ic5b.css';
import '../../css/e/e20wemfyj.css';
import '../../css/f/fa1egib0t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="i7n49ic5b"/><path class="e20wemfyj"/><path class="fa1egib0t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:golf-filled"} {...others} />);
}

export default Component;
