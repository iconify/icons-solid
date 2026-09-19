import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjeo1t3ie.css';

const viewBox = {"width":464,"height":464};
const content = `<path class="jjeo1t3ie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:google-buzz"} {...others} />);
}

export default Component;
