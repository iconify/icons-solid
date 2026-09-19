import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/io3b2ztit.css';
import '../../css/p/pyqtjkbsm.css';
import '../../css/k/kvf6v6b7p.css';
import '../../css/d/dxpvbvbyu.css';
import '../../css/r/rd_no8yio.css';
import '../../css/d/dup5mpwpg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGf7v4bdNb"><g class="ft5dv1b6b"><path class="io3b2ztit"/><circle class="pyqtjkbsm"/><path class="kvf6v6b7p"/><circle class="dxpvbvbyu"/><circle class="rd_no8yio"/><path class="dup5mpwpg"/></g></mask></defs><path mask="url(#SVGf7v4bdNb)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:parenting-book"} {...others} />);
}

export default Component;
