import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bx7fwobyf.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/k/kmp12_cmj.css';
import '../../css/c/cnp20ep5v.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="bx7fwobyf"/><g class="jn8qy4bru"><path class="kmp12_cmj"/><path class="cnp20ep5v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:home-button"} {...others} />);
}

export default Component;
