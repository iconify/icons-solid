import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_9f3ie_s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x_9f3ie_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:feather-necklace"} {...others} />);
}

export default Component;
