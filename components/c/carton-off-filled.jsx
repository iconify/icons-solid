import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bqu_dzbcq.css';
import '../../css/d/dvq72viog.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bqu_dzbcq"/><path class="dvq72viog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:carton-off-filled"} {...others} />);
}

export default Component;
