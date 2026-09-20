import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3xmjpb0y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x3xmjpb0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:message-settings-variant"} {...others} />);
}

export default Component;
