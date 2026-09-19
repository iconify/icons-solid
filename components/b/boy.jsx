import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dhnngobjt.css';
import '../../css/v/vpyny4b_n.css';
import '../../css/l/l2ni8db4y.css';
import '../../css/j/jb_udgldo.css';
import '../../css/j/jg6cyeb2r.css';
import '../../css/r/rfzu-sjnr.css';
import '../../css/i/isc0hbc0g.css';
import '../../css/v/vudlxhv6m.css';
import '../../css/t/tf0idgbjt.css';
import '../../css/o/oici83_ra.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="dhnngobjt"/><path class="vpyny4b_n"/><path class="l2ni8db4y"/><path class="jb_udgldo"/><path class="jg6cyeb2r"/><path class="rfzu-sjnr"/><path class="isc0hbc0g"/><path class="vudlxhv6m"/><path class="tf0idgbjt"/><path class="oici83_ra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:boy"} {...others} />);
}

export default Component;
