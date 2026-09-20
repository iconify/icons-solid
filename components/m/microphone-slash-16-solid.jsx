import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mq42nebwn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mq42nebwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:microphone-slash-16-solid"} {...others} />);
}

export default Component;
