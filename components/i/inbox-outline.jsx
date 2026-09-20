import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xd7ge_b4n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xd7ge_b4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:inbox-outline"} {...others} />);
}

export default Component;
