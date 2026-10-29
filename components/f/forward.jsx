import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hj3efnj0f.css';
import '../../css/u/uuc_s46hx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hj3efnj0f wm-k"/><path class="uuc_s46hx wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:forward"} {...others} />);
}

export default Component;
