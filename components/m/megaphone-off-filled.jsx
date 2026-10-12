import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f22uknsdn.css';
import '../../css/j/jpnuobtcv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f22uknsdn"/><path class="jpnuobtcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:megaphone-off-filled"} {...others} />);
}

export default Component;
