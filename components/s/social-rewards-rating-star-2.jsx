import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gilwy0bbh.css';
import '../../css/m/m0qgp2bmk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gilwy0bbh"/><path class="m0qgp2bmk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:social-rewards-rating-star-2"} {...others} />);
}

export default Component;
