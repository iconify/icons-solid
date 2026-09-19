import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ls7jih8rq.css';
import '../../css/e/e3kiwlbcj.css';
import '../../css/l/l6yac9etg.css';
import '../../css/o/o5edsp6ri.css';
import '../../css/t/t3e8_2b7q.css';
import '../../css/b/b0xj-0leu.css';
import '../../css/g/gwy4r2b2l.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ls7jih8rq"/><path class="e3kiwlbcj"/><path class="l6yac9etg"/><path class="o5edsp6ri"/><path class="t3e8_2b7q"/><path class="b0xj-0leu"/><path class="gwy4r2b2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:hadoop-wordmark"} {...others} />);
}

export default Component;
