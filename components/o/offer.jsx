import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/izysojbwc.css';
import '../../css/v/vgcsy2b4r.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="izysojbwc"/><path class="vgcsy2b4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:offer"} {...others} />);
}

export default Component;
