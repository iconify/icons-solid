import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkq7-hbwz.css';
import '../../css/w/w4fgb8osg.css';
import '../../css/s/ske60sb2r.css';
import '../../css/n/nsdonpbdu.css';
import '../../css/w/wjgydmdbh.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jkq7-hbwz"/><path class="w4fgb8osg"/><path class="ske60sb2r"/><path class="nsdonpbdu"/><path class="wjgydmdbh"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-guatemala"} {...others} />);
}

export default Component;
