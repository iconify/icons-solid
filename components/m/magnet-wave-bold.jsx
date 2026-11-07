import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7xbov04v.css';
import '../../css/j/js3kafi8v.css';
import '../../css/h/h4bi2xbtu.css';
import '../../css/s/szsqnlb_n.css';
import '../../css/j/j4a_sbhlt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j7xbov04v"/><path class="js3kafi8v"/><path class="h4bi2xbtu"/><path class="szsqnlb_n"/><path class="j4a_sbhlt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magnet-wave-bold"} {...others} />);
}

export default Component;
