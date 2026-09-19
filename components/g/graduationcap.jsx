import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qrpvxnift.css';
import '../../css/i/i93xss1ad.css';
import '../../css/a/abwm02bki.css';
import '../../css/j/jgzc08efz.css';
import '../../css/b/bd42qi1fd.css';
import '../../css/z/z6dgytbry.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qrpvxnift"/><path class="i93xss1ad"/><path class="abwm02bki"/><path class="jgzc08efz"/><path class="bd42qi1fd"/><path class="z6dgytbry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:graduationcap"} {...others} />);
}

export default Component;
