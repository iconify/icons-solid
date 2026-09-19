import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/et211dbdf.css';
import '../../css/a/a9-n70bna.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="et211dbdf"/><path class="a9-n70bna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:message-notification"} {...others} />);
}

export default Component;
