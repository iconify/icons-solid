import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cw6_mhbkb.css';
import '../../css/w/wbu9xubvi.css';
import '../../css/z/zfrriw87y.css';
import '../../css/n/nxw8z6bfd.css';
import '../../css/x/xhnsdjblr.css';
import '../../css/s/sud4f5b2f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cw6_mhbkb"/><path class="wbu9xubvi"/><path class="zfrriw87y"/><path class="nxw8z6bfd"/><path class="xhnsdjblr"/><path class="sud4f5b2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-turbine-offshore-spinning-20-bold"} {...others} />);
}

export default Component;
