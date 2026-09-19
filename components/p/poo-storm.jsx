import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr59wcg0k.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="pr59wcg0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:poo-storm"} {...others} />);
}

export default Component;
