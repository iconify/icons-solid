import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bsc84nzwy.css';
import '../../css/q/q90xkobuw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="bsc84nzwy"/><path clip-rule="evenodd" class="q90xkobuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:folder-delete-flat"} {...others} />);
}

export default Component;
