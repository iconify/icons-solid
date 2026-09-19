import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5qpf5bjd.css';
import '../../css/s/stdjlnzrk.css';
import '../../css/g/gxdbe2bxd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="e5qpf5bjd"/><path class="stdjlnzrk"/><path class="gxdbe2bxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:autoscaling"} {...others} />);
}

export default Component;
