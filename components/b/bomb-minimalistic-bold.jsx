import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b7s9cworz.css';
import '../../css/z/zw54mhb2w.css';
import '../../css/g/g5hek6cqk.css';
import '../../css/d/d3ycj6bjr.css';
import '../../css/f/fpxkg0ndt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b7s9cworz"/><path class="zw54mhb2w"/><path class="g5hek6cqk"/><path class="d3ycj6bjr"/><path class="fpxkg0ndt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bomb-minimalistic-bold"} {...others} />);
}

export default Component;
