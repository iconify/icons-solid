import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q0egn3lpb.css';
import '../../css/g/g2n1prb3y.css';
import '../../css/g/gecs6xp5p.css';

const viewBox = {"width":17,"height":16};
const content = `<g transform="translate(2)" class="n1lsf0bnc"><ellipse class="q0egn3lpb"/><path class="g2n1prb3y"/><path class="gecs6xp5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:database-error"} {...others} />);
}

export default Component;
