import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kw-_hobbx.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="kw-_hobbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:mars-and-venus-burst"} {...others} />);
}

export default Component;
