import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lfdh9bp-v.css';
import '../../css/z/z5_z40pzs.css';
import '../../css/j/jgxevjs2d.css';
import '../../css/i/i1ow6ybcr.css';
import '../../css/a/avwfl9ssi.css';
import '../../css/x/x6azrdbre.css';
import '../../css/l/l0arckbbq.css';
import '../../css/u/u1wulu68x.css';
import '../../css/a/a8868c6_q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="lfdh9bp-v wm-shadow"/><path class="wm-s z5_z40pzs"/><path class="jgxevjs2d wm-shadow"/><path class="i1ow6ybcr"/><path class="avwfl9ssi"/><path class="x6azrdbre"/><path class="l0arckbbq wm-s"/><path class="u1wulu68x wm-s"/><path class="a8868c6_q wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:user-star"} {...others} />);
}

export default Component;
