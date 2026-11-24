import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_0y3m6li.css';
import '../../css/l/lm3e9jb_v.css';
import '../../css/i/igxotebur.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r_0y3m6li"/><path class="lm3e9jb_v"/><path class="igxotebur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cloud-hail-filled"} {...others} />);
}

export default Component;
