import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jc5jozb4o.css';
import '../../css/y/y7tupwi0b.css';
import '../../css/e/ev-hbqf4m.css';
import '../../css/a/a9duiwbhm.css';
import '../../css/j/jutvq1bsl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jc5jozb4o"/><path class="y7tupwi0b"/><path class="ev-hbqf4m"/><path class="a9duiwbhm"/><path class="jutvq1bsl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:imp"} {...others} />);
}

export default Component;
