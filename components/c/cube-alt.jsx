import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n0a8gi0lh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n0a8gi0lh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:cube-alt"} {...others} />);
}

export default Component;
