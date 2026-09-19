import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iyotg7boe.css';
import '../../css/q/qjiswcnpz.css';
import '../../css/c/c7qi-k3vh.css';
import '../../css/f/f-dpfubrw.css';
import '../../css/l/lbcawvshy.css';
import '../../css/j/j70q6wn7p.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="iyotg7boe"/><path class="qjiswcnpz"/><path class="c7qi-k3vh"/><ellipse transform="rotate(45.001 35.977 9.37)" class="f-dpfubrw"/><path class="lbcawvshy"/><circle class="j70q6wn7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:lipstick"} {...others} />);
}

export default Component;
