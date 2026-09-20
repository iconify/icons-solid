import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e3nuq6b2w.css';
import '../../css/m/m5-fa8beu.css';
import '../../css/r/rwe5l62xc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e3nuq6b2w"/><path class="m5-fa8beu"/><path class="rwe5l62xc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:ai-cut"} {...others} />);
}

export default Component;
