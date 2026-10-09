import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zp1-1hbdm.css';
import '../../css/v/v0b2vloiw.css';
import '../../css/a/a8mu2cb-t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zp1-1hbdm"/><path class="v0b2vloiw"/><path class="a8mu2cb-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:offshore-platform-20"} {...others} />);
}

export default Component;
