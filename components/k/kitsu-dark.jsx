import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/durrixbcc.css';
import '../../css/r/re-9pnl2o.css';
import '../../css/b/b8b9eabcj.css';
import '../../css/j/j4jbqabqa.css';
import '../../css/a/aki-accfz.css';
import '../../css/x/xjyriybhf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="durrixbcc"/><path class="re-9pnl2o"/><path class="b8b9eabcj"/><path class="j4jbqabqa"/><path class="aki-accfz"/><path class="xjyriybhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kitsu-dark"} {...others} />);
}

export default Component;
