import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hig8vmu5u.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="hig8vmu5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:audio-document-outline"} {...others} />);
}

export default Component;
