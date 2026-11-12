import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvu2p6bej.css';
import '../../css/v/v_h7thdam.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dvu2p6bej"/><path class="v_h7thdam"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:perfice-light"} {...others} />);
}

export default Component;
