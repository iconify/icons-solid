import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rtihe6bnc.css';
import '../../css/z/z04drlb1l.css';
import '../../css/j/jac5gpbkf.css';
import '../../css/d/d04ckpbzr.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="rtihe6bnc"/><g class="z04drlb1l"><path class="jac5gpbkf"/><path class="d04ckpbzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:evergreen-tree"} {...others} />);
}

export default Component;
