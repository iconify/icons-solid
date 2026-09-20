import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fg_q-fb_w.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="fg_q-fb_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-light-round-up-left-stipple-inner"} {...others} />);
}

export default Component;
