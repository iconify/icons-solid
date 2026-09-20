import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxdvsgl9n.css';
import '../../css/c/cgyv5psfj.css';
import '../../css/p/p538nacvg.css';
import '../../css/l/l5l3okb4c.css';
import '../../css/q/q39110y3h.css';
import '../../css/i/izdd3wc_p.css';
import '../../css/p/p3yiezrvd.css';
import '../../css/d/dn83d0grq.css';
import '../../css/f/fi3229bnl.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="qxdvsgl9n"/><path class="cgyv5psfj"/><path class="p538nacvg"/><path class="l5l3okb4c"/><path class="q39110y3h"/><path class="izdd3wc_p"/><circle class="p3yiezrvd"/><circle class="dn83d0grq"/><circle class="fi3229bnl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:outlet"} {...others} />);
}

export default Component;
