import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zr7k__z1v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zr7k__z1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:ringed-beam"} {...others} />);
}

export default Component;
