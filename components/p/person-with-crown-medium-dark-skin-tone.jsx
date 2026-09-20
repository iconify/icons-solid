import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-7epyh_j.css';
import '../../css/a/avpk_juuj.css';
import '../../css/e/eljizvbqk.css';
import '../../css/i/i8r7ir3qi.css';
import '../../css/y/yddqrgbzs.css';
import '../../css/j/j6hawpz5m.css';
import '../../css/c/cxhttubpp.css';
import '../../css/o/og4of9etz.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="b-7epyh_j"/><path class="avpk_juuj"/><path class="eljizvbqk"/><path class="i8r7ir3qi"/><path class="yddqrgbzs"/><path class="j6hawpz5m"/><path class="cxhttubpp"/><path class="og4of9etz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:person-with-crown-medium-dark-skin-tone"} {...others} />);
}

export default Component;
