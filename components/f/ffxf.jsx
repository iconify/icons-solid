import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sorxkmbtq.css';
import '../../css/k/kcrdbzn4r.css';
import '../../css/n/nvngqebvk.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="sorxkmbtq"/><path class="kcrdbzn4r"/><circle class="nvngqebvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ffxf"} {...others} />);
}

export default Component;
