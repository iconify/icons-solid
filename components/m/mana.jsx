import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dwvlvvbmr.css';
import '../../css/l/l66nyjbec.css';
import '../../css/f/fw-va7bcc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dwvlvvbmr"/><path class="l66nyjbec"/><path class="fw-va7bcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:mana"} {...others} />);
}

export default Component;
