import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fysodyb8c.css';
import '../../css/v/vb55jwbbq.css';
import '../../css/u/u-3s1gb6v.css';
import '../../css/f/fg2c8qb6g.css';
import '../../css/j/jup5o-slu.css';
import '../../css/f/fpo23abxs.css';
import '../../css/d/dqcedrkds.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/f/fs2cwf31q.css';
import '../../css/r/rj054ub4n.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="fysodyb8c"/><path class="vb55jwbbq"/><path class="u-3s1gb6v"/><path class="fg2c8qb6g"/><path class="jup5o-slu"/><path class="fpo23abxs"/><path class="dqcedrkds"/><g class="ij2x_72vy"><path class="fs2cwf31q"/><path class="rj054ub4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:japanese-post-office"} {...others} />);
}

export default Component;
