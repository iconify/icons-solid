import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9ms0wllv.css';
import '../../css/t/txxl_f0-v.css';
import '../../css/y/y7cusdbbp.css';

const viewBox = {"width":25,"height":24};
const content = `<path clip-rule="evenodd" class="z9ms0wllv"/><path class="txxl_f0-v"/><path class="y7cusdbbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:volume-high"} {...others} />);
}

export default Component;
