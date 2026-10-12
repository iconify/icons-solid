import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rlj9jxb_e.css';
import '../../css/o/owo49jf1r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rlj9jxb_e"/><path clip-rule="evenodd" class="owo49jf1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:toolbox-filled"} {...others} />);
}

export default Component;
