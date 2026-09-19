import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdk9atbuo.css';

const viewBox = {"width":408,"height":472};
const content = `<path class="fdk9atbuo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:phone"} {...others} />);
}

export default Component;
