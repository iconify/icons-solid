import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvd6fwb9u.css';
import '../../css/d/dh95ohadr.css';
import '../../css/y/y3f69ob8y.css';
import '../../css/o/oy2tuabta.css';
import '../../css/s/s80dwwb5l.css';
import '../../css/d/doj9dq_jg.css';
import '../../css/i/iaodl0bnt.css';
import '../../css/s/s9l-hugss.css';
import '../../css/p/px9b9lbzq.css';
import '../../css/z/z0bpx2b_a.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="dvd6fwb9u"><path class="dh95ohadr"/><path class="y3f69ob8y"/><circle class="oy2tuabta"/><circle class="s80dwwb5l"/></g><g class="doj9dq_jg"><path class="iaodl0bnt"/><path class="s9l-hugss"/><circle class="px9b9lbzq"/><circle class="z0bpx2b_a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:glasses"} {...others} />);
}

export default Component;
