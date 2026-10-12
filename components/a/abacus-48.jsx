import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8jt_mb0e.css';
import '../../css/k/kga35kgyc.css';
import '../../css/z/z5kh--bts.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k8jt_mb0e"/><path class="kga35kgyc"/><path class="z5kh--bts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:abacus-48"} {...others} />);
}

export default Component;
