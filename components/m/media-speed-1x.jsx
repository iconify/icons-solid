import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p73hu3bar.css';

const viewBox = {"width":40,"height":24};
const content = `<path class="p73hu3bar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:media-speed-1x"} {...others} />);
}

export default Component;
