import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pibf0kb_r.css';
import '../../css/x/xts2abbvk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pibf0kb_r"/><path class="xts2abbvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:scan-detail-filled"} {...others} />);
}

export default Component;
