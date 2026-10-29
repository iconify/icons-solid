import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_s4dk37r.css';
import '../../css/i/ibzh0fbya.css';
import '../../css/h/hlbecwbuw.css';
import '../../css/q/qey6jfc-f.css';
import '../../css/u/udi5qoblt.css';
import '../../css/v/vepbnkope.css';
import '../../css/l/lchg1x__i.css';
import '../../css/n/nl1i0opbz.css';
import '../../css/b/b10dy9ruh.css';
import '../../css/g/g9_0c-gso.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r_s4dk37r wm-shadow"/><path class="ibzh0fbya wm-k"/><path class="hlbecwbuw wm-k"/><path class="qey6jfc-f wm-k"/><path class="udi5qoblt wm-k"/><path class="vepbnkope wm-k"/><path class="lchg1x__i wm-shine"/><path class="nl1i0opbz wm-a"/><path class="b10dy9ruh wm-a"/><path class="g9_0c-gso wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:shopping-bag"} {...others} />);
}

export default Component;
