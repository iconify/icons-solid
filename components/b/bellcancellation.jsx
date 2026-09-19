import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1d3s3bsn.css';
import '../../css/l/lqbsjrb1w.css';
import '../../css/o/o676dwbcr.css';
import '../../css/u/u-r-ieuow.css';
import '../../css/i/i2d_gzgyz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u1d3s3bsn"/><path class="lqbsjrb1w"/><path class="o676dwbcr"/><path class="u-r-ieuow"/><path class="i2d_gzgyz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:bellcancellation"} {...others} />);
}

export default Component;
