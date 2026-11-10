import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tbxfxzvwf.css';
import '../../css/i/i7or708cv.css';
import '../../css/f/firyp-b6b.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="tbxfxzvwf"/><path clip-rule="evenodd" class="i7or708cv"/><path class="firyp-b6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:screen-shake"} {...others} />);
}

export default Component;
