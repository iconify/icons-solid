import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kflf7crkg.css';
import '../../css/m/mimh63b6w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kflf7crkg"/><path class="mimh63b6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:call-chat-rounded-bold"} {...others} />);
}

export default Component;
