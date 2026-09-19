import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukd08s7uo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ukd08s7uo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:skull-sabertooth"} {...others} />);
}

export default Component;
