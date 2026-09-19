import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oir0lgm3q.css';
import '../../css/f/fyj0fnbhd.css';
import '../../css/s/sr5f-ojpx.css';
import '../../css/k/kfod8ac1j.css';
import '../../css/g/gqcffo6_p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGA9Mqfcli"><g class="ft5dv1b6b"><path class="oir0lgm3q"/><path class="fyj0fnbhd"/><path class="sr5f-ojpx"/><rect class="kfod8ac1j"/><rect class="gqcffo6_p"/></g></mask></defs><path mask="url(#SVGA9Mqfcli)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:hand-painted-plate"} {...others} />);
}

export default Component;
