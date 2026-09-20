import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p6r8g0bbk.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="p6r8g0bbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:square-pin"} {...others} />);
}

export default Component;
