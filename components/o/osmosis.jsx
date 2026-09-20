import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p_q_9ubpk.css';
import '../../css/u/ucsq06bff.css';
import '../../css/f/f3s8qh61l.css';
import '../../css/a/a6mx032-a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="p_q_9ubpk"/><path class="ucsq06bff"/><path clip-rule="evenodd" class="f3s8qh61l"/><path class="a6mx032-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:osmosis"} {...others} />);
}

export default Component;
