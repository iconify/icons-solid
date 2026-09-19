import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2yv4rdoa.css';
import '../../css/u/uyf_mbp3e.css';
import '../../css/w/w5qbufbiq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="c2yv4rdoa"/><path class="uyf_mbp3e"/><path class="w5qbufbiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:hybrid-networking"} {...others} />);
}

export default Component;
