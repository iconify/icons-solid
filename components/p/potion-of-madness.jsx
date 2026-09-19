import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sz2k0mbpe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sz2k0mbpe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:potion-of-madness"} {...others} />);
}

export default Component;
