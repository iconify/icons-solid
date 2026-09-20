import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x57v4xb2z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x57v4xb2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:cisco-webex"} {...others} />);
}

export default Component;
