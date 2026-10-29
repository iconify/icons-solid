import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rksayxbsr.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/k/kv8k2xgor.css';
import '../../css/j/j29ih9old.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="rksayxbsr"/><path class="qr4ochb5c wm-s"/><path class="kv8k2xgor"/><path class="j29ih9old wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bot-off-duo"} {...others} />);
}

export default Component;
