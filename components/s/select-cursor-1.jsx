import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ph-3zj5qm.css';
import '../../css/p/phy_y3bne.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="ph-3zj5qm"/><path clip-rule="evenodd" class="phy_y3bne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:select-cursor-1"} {...others} />);
}

export default Component;
