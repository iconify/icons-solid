import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulbs00b7h.css';
import '../../css/j/jvbg5sbiq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ulbs00b7h"/><path clip-rule="evenodd" class="jvbg5sbiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:confirmations-4-filled"} {...others} />);
}

export default Component;
