import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mqg_qbtzf.css';
import '../../css/l/l8542ybkm.css';
import '../../css/l/lc21qzuqt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mqg_qbtzf"/><path class="l8542ybkm"/><path class="lc21qzuqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-plus-rounded-bold"} {...others} />);
}

export default Component;
