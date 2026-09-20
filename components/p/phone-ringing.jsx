import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uzhz92pui.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uzhz92pui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:phone-ringing"} {...others} />);
}

export default Component;
