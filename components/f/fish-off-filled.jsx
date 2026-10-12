import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c0v99vl1w.css';
import '../../css/p/pt9q_ib8s.css';
import '../../css/t/tqgpg9bzx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="c0v99vl1w"/><path class="pt9q_ib8s"/><path class="tqgpg9bzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:fish-off-filled"} {...others} />);
}

export default Component;
