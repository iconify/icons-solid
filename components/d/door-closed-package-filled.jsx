import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iq0ba4bnx.css';
import '../../css/f/fu6wn7bkg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iq0ba4bnx"/><path class="fu6wn7bkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:door-closed-package-filled"} {...others} />);
}

export default Component;
