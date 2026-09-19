import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l97ph9b-n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l97ph9b-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:community-healthworker-outline-24px"} {...others} />);
}

export default Component;
