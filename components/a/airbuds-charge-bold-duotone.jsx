import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/l/l0lxso0pj.css';
import '../../css/s/sfdtz-b-u.css';
import '../../css/o/ozclf-b-m.css';
import '../../css/k/k50tiocwd.css';
import '../../css/t/tn3cnxbms.css';
import '../../css/i/i56kufhep.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="l0lxso0pj"/><path class="sfdtz-b-u"/></g><path class="ozclf-b-m"/><path class="k50tiocwd"/><path clip-rule="evenodd" class="tn3cnxbms"/><path class="i56kufhep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-charge-bold-duotone"} {...others} />);
}

export default Component;
