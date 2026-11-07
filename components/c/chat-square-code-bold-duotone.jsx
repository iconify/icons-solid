import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ud6ptt55l.css';
import '../../css/r/r25w052qd.css';
import '../../css/f/frsxhf9nd.css';
import '../../css/g/gchhiqbgt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ud6ptt55l"/><path class="r25w052qd"/><path class="frsxhf9nd"/><path class="gchhiqbgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-code-bold-duotone"} {...others} />);
}

export default Component;
