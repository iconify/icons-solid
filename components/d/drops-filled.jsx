import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vjjreccxy.css';
import '../../css/t/t_s_xqb-n.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vjjreccxy"/><path class="t_s_xqb-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:drops-filled"} {...others} />);
}

export default Component;
