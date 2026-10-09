import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_-k_fetr.css';
import '../../css/l/l7hzbkbbx.css';
import '../../css/l/lr1_aeb-h.css';
import '../../css/y/yccprlbcu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m_-k_fetr"/><path class="l7hzbkbbx"/><path class="lr1_aeb-h"/><path class="yccprlbcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:kiln-20-bold"} {...others} />);
}

export default Component;
