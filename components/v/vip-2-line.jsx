import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/myq_lyb9f.css';
import '../../css/k/kkjzqzj2h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="myq_lyb9f"/><path class="kkjzqzj2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:vip-2-line"} {...others} />);
}

export default Component;
