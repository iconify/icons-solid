import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mk2xieb9p.css';
import '../../css/l/lti03hx_h.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/u/ufer1mbwg.css';
import '../../css/h/hjsevj3ep.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="mk2xieb9p"/><path class="lti03hx_h"/><g class="jn8qy4bru"><path class="ufer1mbwg"/><path class="hjsevj3ep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:takeout-box"} {...others} />);
}

export default Component;
