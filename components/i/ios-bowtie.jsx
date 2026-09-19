import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dl1ct9w7i.css';
import '../../css/c/cpisrvb2h.css';
import '../../css/z/z2jaifrlq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dl1ct9w7i"/><path class="cpisrvb2h"/><path class="z2jaifrlq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-bowtie"} {...others} />);
}

export default Component;
