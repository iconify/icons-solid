import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lozn7k14b.css';
import '../../css/c/cn55zc5yt.css';
import '../../css/w/wt6hebnha.css';
import '../../css/k/k8izljbyu.css';
import '../../css/s/sn1x08b6h.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="lozn7k14b"/><circle transform="matrix(-1 0 0 1 36 36)" class="cn55zc5yt"/><path class="wt6hebnha"/><circle class="k8izljbyu"/><circle class="sn1x08b6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:fisheye"} {...others} />);
}

export default Component;
