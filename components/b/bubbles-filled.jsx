import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s176rmg_i.css';
import '../../css/r/rg-7atbag.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s176rmg_i"/><path class="rg-7atbag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bubbles-filled"} {...others} />);
}

export default Component;
