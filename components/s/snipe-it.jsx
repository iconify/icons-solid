import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/idd-aow3o.css';
import '../../css/w/w45w5fwan.css';

const viewBox = {"width":140.2,"height":144.6,"left":66.9,"top":58.4};
const content = `<path class="idd-aow3o"/><path class="w45w5fwan"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:snipe-it"} {...others} />);
}

export default Component;
