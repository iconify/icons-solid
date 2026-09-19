import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iaip9j5ck.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iaip9j5ck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-regular:face-grin-hearts"} {...others} />);
}

export default Component;
