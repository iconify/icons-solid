import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yt4unsb2t.css';
import '../../css/f/fn009esdi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yt4unsb2t"/><path class="fn009esdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:microphone-slash-20-solid"} {...others} />);
}

export default Component;
