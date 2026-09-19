import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dh34hyb1u.css';

const viewBox = {"width":768,"height":1024};
const content = `<path class="dh34hyb1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:fuelphp"} {...others} />);
}

export default Component;
