import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_d9ezbhu.css';
import '../../css/q/qrcs0rmbe.css';
import '../../css/i/i9id0sb-y.css';
import '../../css/n/nfh4_j2mn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z_d9ezbhu"/><path class="qrcs0rmbe"/><path class="i9id0sb-y"/><path class="nfh4_j2mn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fertiliser-20-bold"} {...others} />);
}

export default Component;
