import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jte9y4bzl.css';
import '../../css/h/h78kjxbop.css';
import '../../css/d/ds0tozb0w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jte9y4bzl"/><path class="h78kjxbop"/><path class="ds0tozb0w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:dome-duotone"} {...others} />);
}

export default Component;
