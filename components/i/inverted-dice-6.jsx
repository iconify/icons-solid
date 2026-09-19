import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/en51l1bxd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="en51l1bxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:inverted-dice-6"} {...others} />);
}

export default Component;
