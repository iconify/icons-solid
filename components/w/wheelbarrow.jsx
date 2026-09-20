import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4r5n9byo.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/x/xa8zo-wvi.css';
import '../../css/n/n05ob-bph.css';
import '../../css/n/nuw89-yss.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="k4r5n9byo"/><g class="jn8qy4bru"><path class="xa8zo-wvi"/><path class="n05ob-bph"/><path class="nuw89-yss"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:wheelbarrow"} {...others} />);
}

export default Component;
