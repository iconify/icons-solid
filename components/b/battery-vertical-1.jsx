import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ad19tgbug.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ad19tgbug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:battery-vertical-1"} {...others} />);
}

export default Component;
