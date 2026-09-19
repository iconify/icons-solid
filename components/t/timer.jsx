import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l_i7ady4i.css';
import '../../css/d/d15ntbc-g.css';
import '../../css/g/gisoqpnwv.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="l_i7ady4i"/><path class="d15ntbc-g"/><path class="gisoqpnwv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:timer"} {...others} />);
}

export default Component;
