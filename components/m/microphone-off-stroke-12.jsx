import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gu-rojbqe.css';
import '../../css/n/n6od47b6s.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="gu-rojbqe"/><path class="n6od47b6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:microphone-off-stroke-12"} {...others} />);
}

export default Component;
