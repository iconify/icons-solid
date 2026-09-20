import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dqpvdibhc.css';
import '../../css/x/xvl-u105f.css';
import '../../css/x/xdefqhbvz.css';
import '../../css/i/i2uk179cg.css';
import '../../css/u/ut5q_murs.css';
import '../../css/y/y9c93mbvu.css';
import '../../css/a/az2wei31k.css';
import '../../css/f/fwr2ktotd.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="dqpvdibhc"/><path class="xvl-u105f"/><path class="xdefqhbvz"/><path class="i2uk179cg"/><path class="ut5q_murs"/><path class="y9c93mbvu"/><path class="az2wei31k"/><path class="fwr2ktotd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:3d-printer-low"} {...others} />);
}

export default Component;
