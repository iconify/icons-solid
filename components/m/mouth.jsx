import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mdaolxbzk.css';
import '../../css/f/fi8cawb-a.css';
import '../../css/z/zr7rfacfr.css';
import '../../css/c/czwnylnsc.css';
import '../../css/w/wyaupcbhr.css';
import '../../css/g/gptncvxfq.css';
import '../../css/p/pecpz1b3a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mdaolxbzk"/><path class="fi8cawb-a"/><path class="zr7rfacfr"/><path class="czwnylnsc"/><path class="wyaupcbhr"/><path class="gptncvxfq"/><path class="pecpz1b3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:mouth"} {...others} />);
}

export default Component;
