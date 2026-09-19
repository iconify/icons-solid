import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i_x_i0b1y.css';
import '../../css/p/pp4cclb1v.css';
import '../../css/g/gidacsb4d.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="i_x_i0b1y"/><path class="pp4cclb1v"/><path class="gidacsb4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:no-dog"} {...others} />);
}

export default Component;
