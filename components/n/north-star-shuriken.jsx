import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4z9n5bkb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k4z9n5bkb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:north-star-shuriken"} {...others} />);
}

export default Component;
