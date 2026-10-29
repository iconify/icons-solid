import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/c6e--ab3b.css';
import '../../css/e/e49usltee.css';
import '../../css/d/d8jrfxbex.css';
import '../../css/g/g37caurxe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="c6e--ab3b wm-k"/><path class="e49usltee wm-a"/><path class="d8jrfxbex wm-k"/><path class="g37caurxe wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:corner-down-left-blueprint"} {...others} />);
}

export default Component;
