import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wbma3xpbl.css';
import '../../css/a/avpyb3bsq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wbma3xpbl"/><path class="avpyb3bsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-pen-filled"} {...others} />);
}

export default Component;
