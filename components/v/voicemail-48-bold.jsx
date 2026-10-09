import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gpgircbhz.css';
import '../../css/o/ouirlxbmn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gpgircbhz"/><path class="ouirlxbmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:voicemail-48-bold"} {...others} />);
}

export default Component;
