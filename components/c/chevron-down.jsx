import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_-xw2btr.css';
import '../../css/n/nmu8t-fwz.css';
import '../../css/v/vdtxttb4w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k_-xw2btr wm-shadow"/><path class="nmu8t-fwz wm-k"/><path class="vdtxttb4w wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:chevron-down"} {...others} />);
}

export default Component;
