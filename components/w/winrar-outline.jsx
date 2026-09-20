import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lof-am1yz.css';
import '../../css/p/pky0achnd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lof-am1yz"/><path clip-rule="evenodd" class="pky0achnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:winrar-outline"} {...others} />);
}

export default Component;
