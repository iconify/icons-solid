import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tm7-icbdt.css';
import '../../css/f/fl5j57bvr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tm7-icbdt"/><path class="fl5j57bvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:dribbble"} {...others} />);
}

export default Component;
