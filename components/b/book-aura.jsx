import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukwl3p9vr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ukwl3p9vr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:book-aura"} {...others} />);
}

export default Component;
