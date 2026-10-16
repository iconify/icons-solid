import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lnygumoma.css';
import '../../css/m/m_7duebkv.css';
import '../../css/h/ht_ws6k_w.css';
import '../../css/g/gkdo6zoja.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lnygumoma"/><path class="m_7duebkv"/><path class="ht_ws6k_w"/><path class="gkdo6zoja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:district-cooling-20-bold"} {...others} />);
}

export default Component;
