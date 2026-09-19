import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jozfr4bht.css';
import '../../css/b/bgu4qnb1v.css';
import '../../css/d/dbndu9bzr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jozfr4bht"/><path class="bgu4qnb1v"/><path class="dbndu9bzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:americanfootball"} {...others} />);
}

export default Component;
