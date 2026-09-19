import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nhgy8ebgx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nhgy8ebgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:standing-potion"} {...others} />);
}

export default Component;
