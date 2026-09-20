import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ax3mq91ic.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ax3mq91ic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:viewport-short"} {...others} />);
}

export default Component;
