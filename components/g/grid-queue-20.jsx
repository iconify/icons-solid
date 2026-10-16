import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_f_kcb1a.css';
import '../../css/j/js7r36bge.css';
import '../../css/p/pjegvpb6r.css';
import '../../css/r/rbi3a9cbx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w_f_kcb1a"/><path class="js7r36bge"/><path class="pjegvpb6r"/><path class="rbi3a9cbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grid-queue-20"} {...others} />);
}

export default Component;
