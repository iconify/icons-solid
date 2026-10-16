import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwfac5bpe.css';
import '../../css/i/imbds7bum.css';
import '../../css/k/kd1gl25tg.css';

const viewBox = {"width":848.3,"height":848.3,"left":352.3,"top":346.2};
const content = `<defs><linearGradient id="SVGr5flAcRR" x1="0" x2="1" y1="0" y2="1"><stop offset="0" class="bwfac5bpe"/><stop offset="1" class="imbds7bum"/></linearGradient></defs><path fill="url(#SVGr5flAcRR)" transform="matrix(.1 0 0 -.1 0 1536)" class="kd1gl25tg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:dashy"} {...others} />);
}

export default Component;
