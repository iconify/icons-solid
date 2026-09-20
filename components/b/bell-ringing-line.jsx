import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/atbu4hsrl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="atbu4hsrl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:bell-ringing-line"} {...others} />);
}

export default Component;
