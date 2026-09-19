import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9v0nvb2i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n9v0nvb2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:vampire-cape"} {...others} />);
}

export default Component;
