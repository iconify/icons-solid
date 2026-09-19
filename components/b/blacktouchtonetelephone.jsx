import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/inrii0mwj.css';
import '../../css/y/yukot35yn.css';
import '../../css/c/ctunfubbk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="inrii0mwj"/><path class="yukot35yn"/><path class="ctunfubbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:blacktouchtonetelephone"} {...others} />);
}

export default Component;
