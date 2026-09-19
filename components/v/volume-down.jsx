import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7o-o3clb.css';

const viewBox = {"width":1152,"height":1280};
const content = `<path class="i7o-o3clb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:volume-down"} {...others} />);
}

export default Component;
