import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jnag0bcrf.css';
import '../../css/f/faxfr4biv.css';
import '../../css/q/qn9718sum.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="jnag0bcrf"/><path class="faxfr4biv"/><path class="qn9718sum"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-monster-fluffy"} {...others} />);
}

export default Component;
