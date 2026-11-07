import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv2msx5_t.css';
import '../../css/v/v5fufdeal.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hv2msx5_t"/><path clip-rule="evenodd" class="v5fufdeal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:medal-star-square-bold-duotone"} {...others} />);
}

export default Component;
