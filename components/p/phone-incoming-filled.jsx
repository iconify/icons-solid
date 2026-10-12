import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hpyifib8k.css';
import '../../css/b/bw5bm5rdk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hpyifib8k"/><path class="bw5bm5rdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:phone-incoming-filled"} {...others} />);
}

export default Component;
