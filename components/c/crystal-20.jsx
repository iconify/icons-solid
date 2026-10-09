import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/juwx635fx.css';
import '../../css/y/yx8h1eeun.css';
import '../../css/y/yvxmkpbvk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="juwx635fx"/><path class="yx8h1eeun"/><path class="yvxmkpbvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crystal-20"} {...others} />);
}

export default Component;
