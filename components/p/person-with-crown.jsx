import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-7epyh_j.css';
import '../../css/a/avpk_juuj.css';
import '../../css/a/a1v6mobvx.css';
import '../../css/n/n9cgfy1lg.css';
import '../../css/y/yddqrgbzs.css';
import '../../css/j/j6hawpz5m.css';
import '../../css/c/cxhttubpp.css';
import '../../css/o/og4of9etz.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="b-7epyh_j"/><path class="avpk_juuj"/><path class="a1v6mobvx"/><path class="n9cgfy1lg"/><path class="yddqrgbzs"/><path class="j6hawpz5m"/><path class="cxhttubpp"/><path class="og4of9etz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:person-with-crown"} {...others} />);
}

export default Component;
