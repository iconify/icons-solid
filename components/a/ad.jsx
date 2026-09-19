import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rgf3yzrlx.css';
import '../../css/b/bfpxu9v3l.css';
import '../../css/q/qm50h5_2n.css';
import '../../css/a/acir8hp_u.css';
import '../../css/x/xtmg0rh1y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGPO1YRdtn"><g class="ft5dv1b6b"><circle class="rgf3yzrlx"/><path class="bfpxu9v3l"/><path class="qm50h5_2n"/><path class="acir8hp_u"/><path class="xtmg0rh1y"/></g></mask></defs><path mask="url(#SVGPO1YRdtn)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:ad"} {...others} />);
}

export default Component;
