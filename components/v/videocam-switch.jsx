import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rgw1eqx5t.css';

const viewBox = {"width":432,"height":384};
const content = `<path class="rgw1eqx5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:videocam-switch"} {...others} />);
}

export default Component;
