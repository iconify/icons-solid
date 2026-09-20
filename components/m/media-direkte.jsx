import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n5jfs-i_r.css';
import '../../css/f/f9qwu4cot.css';

const viewBox = {"width":40,"height":24};
const content = `<path clip-rule="evenodd" class="n5jfs-i_r"/><path class="f9qwu4cot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:media-direkte"} {...others} />);
}

export default Component;
