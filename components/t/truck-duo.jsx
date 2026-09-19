import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pm0g03ory.css';
import '../../css/c/c3yk-nbbq.css';
import '../../css/o/ozqsb-b4p.css';
import '../../css/j/jcgz6bcws.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="pm0g03ory"/><path class="c3yk-nbbq"/><path class="ozqsb-b4p"/><path class="jcgz6bcws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:truck-duo"} {...others} />);
}

export default Component;
