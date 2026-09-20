import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lr4jm709b.css';
import '../../css/r/rrmex0lvx.css';
import '../../css/l/lijjq1poj.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/h/hiudp9bpu.css';
import '../../css/b/bn4qn_b5m.css';
import '../../css/a/aeihgmbhh.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="lr4jm709b"/><path class="rrmex0lvx"/><path class="lijjq1poj"/><g class="jn8qy4bru"><circle class="hiudp9bpu"/><path class="bn4qn_b5m"/><path class="aeihgmbhh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:girl-standing"} {...others} />);
}

export default Component;
