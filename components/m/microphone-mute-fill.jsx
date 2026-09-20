import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3efgdbxq.css';
import '../../css/i/iza8txj7z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x3efgdbxq"/><path class="iza8txj7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:microphone-mute-fill"} {...others} />);
}

export default Component;
