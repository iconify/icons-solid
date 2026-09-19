import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-wuzzo5c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a-wuzzo5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:lightning-helix"} {...others} />);
}

export default Component;
