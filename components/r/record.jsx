import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/o/o5t226bvr.css';
import '../../css/d/ddygjdbod.css';
import '../../css/h/ha53tcbge.css';
import '../../css/c/cuu9dts4z.css';
import '../../css/x/xctod_4ic.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG4tyNJcYu"><g class="ufeehvblu"><rect class="o5t226bvr"/><path class="ddygjdbod"/><path class="ha53tcbge"/><path class="cuu9dts4z"/><path class="xctod_4ic"/></g></mask></defs><path mask="url(#SVG4tyNJcYu)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:record"} {...others} />);
}

export default Component;
