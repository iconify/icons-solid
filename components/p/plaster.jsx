import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e4wm33b5i.css';
import '../../css/u/u27pckbbk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="e4wm33b5i"/><path clip-rule="evenodd" class="u27pckbbk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:plaster"} {...others} />);
}

export default Component;
