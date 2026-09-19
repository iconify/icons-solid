import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/des5-xb9k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="des5-xb9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:gift-of-knowledge"} {...others} />);
}

export default Component;
