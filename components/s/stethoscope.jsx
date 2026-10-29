import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ttlb7qd0z.css';
import '../../css/y/yv7txbcoh.css';
import '../../css/e/em-wv-bhi.css';
import '../../css/i/i19h-pb3t.css';
import '../../css/j/jl-m0qo7l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ttlb7qd0z"/><path class="yv7txbcoh"/><path class="em-wv-bhi"/><path class="i19h-pb3t"/><path class="jl-m0qo7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:stethoscope"} {...others} />);
}

export default Component;
