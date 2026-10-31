import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mt7jgsbcz.css';
import '../../css/b/bc66ehhoj.css';
import '../../css/o/ofdmsje0v.css';
import '../../css/c/c565623wx.css';
import '../../css/y/y3fjidblx.css';
import '../../css/d/d12m0_btc.css';
import '../../css/b/b6y42mbok.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="mt7jgsbcz"/><path class="bc66ehhoj"/><path class="ofdmsje0v"/><path class="c565623wx"/><path class="y3fjidblx"/><path class="d12m0_btc"/><path clip-rule="evenodd" class="b6y42mbok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:confused-nick-young"} {...others} />);
}

export default Component;
