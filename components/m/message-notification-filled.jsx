import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a9-n70bna.css';
import '../../css/t/tw2nlk24g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a9-n70bna"/><path class="tw2nlk24g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:message-notification-filled"} {...others} />);
}

export default Component;
