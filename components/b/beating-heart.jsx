import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x0zftu4ib.css';
import '../../css/j/jgww5-ber.css';
import '../../css/g/gjz-fby7l.css';
import '../../css/k/kbqyp-bnk.css';
import '../../css/m/mvjmzrb7j.css';
import '../../css/l/lxdfrng1j.css';
import '../../css/a/ask8jfb3o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x0zftu4ib"/><path class="jgww5-ber"/><path class="gjz-fby7l"/><path class="kbqyp-bnk"/><path class="mvjmzrb7j"/><path class="lxdfrng1j"/><path class="ask8jfb3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:beating-heart"} {...others} />);
}

export default Component;
