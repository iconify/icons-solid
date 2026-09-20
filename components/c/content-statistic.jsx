import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/m/mhop3bcft.css';
import '../../css/l/lksyh4bmq.css';
import '../../css/f/fu4co2bti.css';
import '../../css/q/qsixg8bmk.css';
import '../../css/y/yf1o16bxd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="mhop3bcft"/><path clip-rule="evenodd" class="lksyh4bmq"/><path class="fu4co2bti"/><path clip-rule="evenodd" class="qsixg8bmk"/><path class="yf1o16bxd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:content-statistic"} {...others} />);
}

export default Component;
