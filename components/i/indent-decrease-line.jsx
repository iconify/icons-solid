import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mqle92b2e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mqle92b2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:indent-decrease-line"} {...others} />);
}

export default Component;
