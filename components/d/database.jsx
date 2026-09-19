import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q0egn3lpb.css';
import '../../css/g/gqfpyx1oz.css';
import '../../css/f/f19jdeuju.css';

const viewBox = {"width":16,"height":16};
const content = `<g transform="translate(1)" class="n1lsf0bnc"><ellipse class="q0egn3lpb"/><path class="gqfpyx1oz"/><path class="f19jdeuju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:database"} {...others} />);
}

export default Component;
