import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p81ukmb3o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p81ukmb3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:pencil-ruler"} {...others} />);
}

export default Component;
