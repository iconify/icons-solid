import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwsxc47kb.css';
import '../../css/k/kkhl62fff.css';
import '../../css/o/o-v99zb0r.css';
import '../../css/h/hc3npei1j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lwsxc47kb"/><path class="kkhl62fff"/><path class="o-v99zb0r"/><path clip-rule="evenodd" class="hc3npei1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:password-minimalistic-outline"} {...others} />);
}

export default Component;
