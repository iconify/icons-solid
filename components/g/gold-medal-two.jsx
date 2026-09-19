import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q1lvuh10u.css';
import '../../css/v/v0hphacgl.css';
import '../../css/d/dmrsmx4ou.css';
import '../../css/w/wjx2g5uen.css';
import '../../css/u/u8b9n-bkm.css';
import '../../css/m/m6mpkltox.css';
import '../../css/h/hp5chh-it.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGUFU1fbXg"><g class="ft5dv1b6b"><path class="q1lvuh10u"/><path class="v0hphacgl"/><path class="dmrsmx4ou"/><path class="wjx2g5uen"/><path class="u8b9n-bkm"/><path class="m6mpkltox"/><path class="hp5chh-it"/></g></mask></defs><path mask="url(#SVGUFU1fbXg)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:gold-medal-two"} {...others} />);
}

export default Component;
