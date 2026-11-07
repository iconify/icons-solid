import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vob1vf30q.css';
import '../../css/c/cttr9cbpd.css';
import '../../css/h/hz2a1g29i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vob1vf30q"/><path class="cttr9cbpd"/><path clip-rule="evenodd" class="hz2a1g29i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-check-outline"} {...others} />);
}

export default Component;
