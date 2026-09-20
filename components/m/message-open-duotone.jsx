import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gnor7rbtu.css';
import '../../css/i/iim7l5brv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gnor7rbtu"/><path class="iim7l5brv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:message-open-duotone"} {...others} />);
}

export default Component;
