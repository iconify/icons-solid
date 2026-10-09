import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yf341pb1x.css';
import '../../css/z/z4ddoubly.css';
import '../../css/x/xshgi_b-w.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yf341pb1x"/><path class="z4ddoubly"/><path class="xshgi_b-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:salt-cavern-20-bold"} {...others} />);
}

export default Component;
