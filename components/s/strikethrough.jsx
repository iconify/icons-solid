import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/es1645-bw.css';
import '../../css/x/xzun-2bvw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="es1645-bw wm-k"/><path class="wm-a xzun-2bvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:strikethrough"} {...others} />);
}

export default Component;
