import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ktc-_ac_k.css';
import '../../css/p/pasu78bxq.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="ktc-_ac_k"/><path class="pasu78bxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:power-switch"} {...others} />);
}

export default Component;
