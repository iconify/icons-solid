import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrylsobpa.css';
import '../../css/d/dcxj6tbtg.css';
import '../../css/b/bvmkafbrv.css';
import '../../css/k/kk28j3r0s.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nrylsobpa"/><path class="dcxj6tbtg"/><path class="bvmkafbrv"/><path class="kk28j3r0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:hearing"} {...others} />);
}

export default Component;
