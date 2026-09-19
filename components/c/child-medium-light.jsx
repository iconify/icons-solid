import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/azgqn_d-k.css';
import '../../css/x/xsvp5g16w.css';
import '../../css/w/wyz0uikhh.css';
import '../../css/j/jb_udgldo.css';
import '../../css/g/gq1a1bj9c.css';
import '../../css/r/rfzu-sjnr.css';
import '../../css/i/isc0hbc0g.css';
import '../../css/v/vudlxhv6m.css';
import '../../css/t/tf0idgbjt.css';
import '../../css/t/tlmy_ibsi.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="azgqn_d-k"/><path class="xsvp5g16w"/><path class="wyz0uikhh"/><path class="jb_udgldo"/><path class="gq1a1bj9c"/><path class="rfzu-sjnr"/><path class="isc0hbc0g"/><path class="vudlxhv6m"/><path class="tf0idgbjt"/><path class="tlmy_ibsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:child-medium-light"} {...others} />);
}

export default Component;
