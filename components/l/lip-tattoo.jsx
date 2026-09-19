import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/v/vyy23kbws.css';
import '../../css/l/lbasq6h_m.css';
import '../../css/n/nn4_--rny.css';
import '../../css/l/lcx7m-3ja.css';
import '../../css/e/e2vr8o77x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGL31tqcKY"><g class="rohhhzb0l"><path class="vyy23kbws"/><path class="lbasq6h_m"/><path class="nn4_--rny"/><path class="lcx7m-3ja"/><path class="e2vr8o77x"/></g></mask></defs><path mask="url(#SVGL31tqcKY)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:lip-tattoo"} {...others} />);
}

export default Component;
