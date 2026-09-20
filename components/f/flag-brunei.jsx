import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dur0b2p3t.css';
import '../../css/i/imnbdmb7j.css';
import '../../css/p/pn6-uy73m.css';
import '../../css/s/smq-tk8nf.css';
import '../../css/f/fan_kmbuu.css';
import '../../css/k/kvfo0lb0a.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="dur0b2p3t"/><path class="imnbdmb7j"/><path class="pn6-uy73m"/><g class="smq-tk8nf"><path class="fan_kmbuu"/><path class="kvfo0lb0a"/></g><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-brunei"} {...others} />);
}

export default Component;
