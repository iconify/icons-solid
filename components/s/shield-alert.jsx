import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6cq0z4kl.css';
import '../../css/m/m47_gshyo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h6cq0z4kl wm-k"/><path class="m47_gshyo wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:shield-alert"} {...others} />);
}

export default Component;
