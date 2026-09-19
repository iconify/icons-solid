import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ijkhwubvy.css';

const viewBox = {"width":999.978,"height":1000};
const content = `<path class="ijkhwubvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"brandico:skype"} {...others} />);
}

export default Component;
