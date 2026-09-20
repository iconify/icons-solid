import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7kfprb5n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c7kfprb5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:zodiac-aries"} {...others} />);
}

export default Component;
