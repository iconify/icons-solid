import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5g7e_k4u.css';
import '../../css/m/mob_cyb-s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h5g7e_k4u"/><path clip-rule="evenodd" class="mob_cyb-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:monitor-stop-fill"} {...others} />);
}

export default Component;
