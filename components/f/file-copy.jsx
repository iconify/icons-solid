import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d3owh3b3e.css';
import '../../css/i/i_jkyym3k.css';
import '../../css/q/qkseeyfad.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d3owh3b3e"/><path class="i_jkyym3k"/><path class="qkseeyfad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:file-copy"} {...others} />);
}

export default Component;
