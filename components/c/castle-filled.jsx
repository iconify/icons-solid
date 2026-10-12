import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uw-8xobrx.css';
import '../../css/o/ozytg_30r.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="uw-8xobrx"/><path class="ozytg_30r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:castle-filled"} {...others} />);
}

export default Component;
