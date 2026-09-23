import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ej0pdfs8d.css';
import '../../css/b/bmagwps1n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ej0pdfs8d"/><path class="bmagwps1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:git-branch-x"} {...others} />);
}

export default Component;
