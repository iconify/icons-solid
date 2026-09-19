import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfo1k5b-e.css';
import '../../css/f/fzzzpfbia.css';
import '../../css/l/l80966bqg.css';
import '../../css/i/i-gcz-eip.css';

const viewBox = {"width":16,"height":14};
const content = `<path class="sfo1k5b-e"/><path class="fzzzpfbia"/><path class="l80966bqg"/><path class="i-gcz-eip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:mastercard"} {...others} />);
}

export default Component;
