import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-8uexqez.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k-8uexqez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:djed-pillar"} {...others} />);
}

export default Component;
