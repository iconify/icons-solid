import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmr-2dv6h.css';
import '../../css/j/jcsy-xpip.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nmr-2dv6h"/><path class="jcsy-xpip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cigarette-off-filled"} {...others} />);
}

export default Component;
