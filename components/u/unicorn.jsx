import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt4pjqb8r.css';
import '../../css/s/sa3l4zb5k.css';
import '../../css/v/vss35v14q.css';
import '../../css/u/ueab_5btr.css';
import '../../css/z/zk7q8ubwv.css';
import '../../css/d/dd0u4ybtv.css';
import '../../css/m/mzplj-bty.css';
import '../../css/i/if27tabyy.css';
import '../../css/f/foe0hebnl.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="dt4pjqb8r"/><path class="sa3l4zb5k"/><path class="vss35v14q"/><path class="ueab_5btr"/><path class="zk7q8ubwv"/><path class="dd0u4ybtv"/><path class="mzplj-bty"/><path class="if27tabyy"/><circle class="foe0hebnl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:unicorn"} {...others} />);
}

export default Component;
