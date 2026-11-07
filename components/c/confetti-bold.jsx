import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xuwi1pesc.css';
import '../../css/a/a67tjmbpz.css';
import '../../css/j/j-b2jrbss.css';
import '../../css/l/lvhvsfrta.css';
import '../../css/a/a_rz4ob7i.css';
import '../../css/f/fbkj5-bcb.css';
import '../../css/t/tynyo1-fx.css';
import '../../css/u/ujf9gwbko.css';
import '../../css/n/n8c7fob7a.css';
import '../../css/t/tms37fneb.css';
import '../../css/r/rzlmog5mp.css';
import '../../css/z/z6entc06l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xuwi1pesc"/><path class="a67tjmbpz"/><path class="j-b2jrbss"/><path class="lvhvsfrta"/><path class="a_rz4ob7i"/><path class="fbkj5-bcb"/><path class="tynyo1-fx"/><path class="ujf9gwbko"/><path class="n8c7fob7a"/><path class="tms37fneb"/><path class="rzlmog5mp"/><path class="z6entc06l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:confetti-bold"} {...others} />);
}

export default Component;
