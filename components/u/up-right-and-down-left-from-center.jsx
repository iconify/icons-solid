import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gw9d_bb_w.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="gw9d_bb_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:up-right-and-down-left-from-center"} {...others} />);
}

export default Component;
