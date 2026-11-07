import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xdj9eybmg.css';
import '../../css/t/tgxkbbc5w.css';
import '../../css/p/p6a18oboc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xdj9eybmg"/><path class="tgxkbbc5w"/><path clip-rule="evenodd" class="p6a18oboc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:skateboard-bold-duotone"} {...others} />);
}

export default Component;
