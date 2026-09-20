import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jcyedxxtq.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/p/pyhwdlbaj.css';
import '../../css/f/fk9ervbqx.css';
import '../../css/c/cfi22q2gr.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jcyedxxtq"/><g class="jn8qy4bru"><path class="pyhwdlbaj"/><path class="fk9ervbqx"/><path class="cfi22q2gr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:fingerprint"} {...others} />);
}

export default Component;
