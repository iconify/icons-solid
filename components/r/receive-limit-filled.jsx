import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sxpr3ub_o.css';
import '../../css/r/r7i5_vb5f.css';
import '../../css/m/m7uizyb3h.css';
import '../../css/k/k4vk7r6ox.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sxpr3ub_o"/><path class="r7i5_vb5f"/><path class="m7uizyb3h"/><path class="k4vk7r6ox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:receive-limit-filled"} {...others} />);
}

export default Component;
