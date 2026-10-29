import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc0i3r_es.css';
import '../../css/v/vd-a_tg_q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bc0i3r_es"/><path class="vd-a_tg_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:refresh"} {...others} />);
}

export default Component;
