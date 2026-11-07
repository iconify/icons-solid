import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/ssc66acas.css';
import '../../css/j/jo6q_wbuz.css';
import '../../css/m/m0j83-9at.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ssc66acas"/><path class="jo6q_wbuz"/><path clip-rule="evenodd" class="m0j83-9at"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rewind-10-seconds-forward-bold"} {...others} />);
}

export default Component;
