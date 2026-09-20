import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rh22lt3gh.css';
import '../../css/k/ks82cb6hj.css';
import '../../css/q/qk-rao-nr.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/c/cz18k680z.css';
import '../../css/x/x5eid6x3i.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="rh22lt3gh"/><path class="ks82cb6hj"/><path class="qk-rao-nr"/><g class="jn8qy4bru"><path class="cz18k680z"/><path class="x5eid6x3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:warning-tsunami"} {...others} />);
}

export default Component;
