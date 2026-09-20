import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/blymh47km.css';
import '../../css/v/vc5rvfb-g.css';
import '../../css/s/s1hhqdvlf.css';
import '../../css/q/qwvcpjsbc.css';
import '../../css/u/uwx2srb2e.css';
import '../../css/d/dh3l8xf5q.css';
import '../../css/z/zoqfde-4y.css';
import '../../css/l/lti-jzfyu.css';
import '../../css/g/gjvaxlc7u.css';
import '../../css/u/ujmz0qzyn.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="blymh47km"/><path class="vc5rvfb-g"/><path class="s1hhqdvlf"/><path class="qwvcpjsbc"/><path class="uwx2srb2e"/><path class="dh3l8xf5q"/><path class="zoqfde-4y"/><path class="lti-jzfyu"/><path class="gjvaxlc7u"/><path class="ujmz0qzyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:deaf-man-dark-skin-tone"} {...others} />);
}

export default Component;
