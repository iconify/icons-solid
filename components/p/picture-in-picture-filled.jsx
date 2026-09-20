import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dh62wob5o.css';
import '../../css/i/iz60unblf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="dh62wob5o"/><path class="iz60unblf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:picture-in-picture-filled"} {...others} />);
}

export default Component;
