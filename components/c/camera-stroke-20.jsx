import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zrvv8ub0p.css';
import '../../css/w/w0l__2bcq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zrvv8ub0p"/><path class="w0l__2bcq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:camera-stroke-20"} {...others} />);
}

export default Component;
