import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sa4i_ynuq.css';
import '../../css/q/qfxk42bpg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sa4i_ynuq"/><path class="qfxk42bpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:messages-square-filled"} {...others} />);
}

export default Component;
