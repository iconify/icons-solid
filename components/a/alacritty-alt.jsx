import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_f4z8bdu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c_f4z8bdu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:alacritty-alt"} {...others} />);
}

export default Component;
