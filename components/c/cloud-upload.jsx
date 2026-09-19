import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1tar5adi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f1tar5adi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:cloud-upload"} {...others} />);
}

export default Component;
