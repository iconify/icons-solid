import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q0egn3lpb.css';
import '../../css/f/f19jdeuju.css';
import '../../css/q/q_0b0cc6z.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><g transform="translate(2)"><ellipse class="q0egn3lpb"/><path class="f19jdeuju"/></g><path class="q_0b0cc6z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:database-download"} {...others} />);
}

export default Component;
