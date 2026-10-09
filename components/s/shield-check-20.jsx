import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/emhcgzbmm.css';
import '../../css/q/q2v_q547a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="emhcgzbmm"/><path class="q2v_q547a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shield-check-20"} {...others} />);
}

export default Component;
