import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqzfn4-ds.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hqzfn4-ds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:dripping-star"} {...others} />);
}

export default Component;
