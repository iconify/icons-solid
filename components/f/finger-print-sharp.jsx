import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsowlmztv.css';
import '../../css/l/lvv06sbtq.css';
import '../../css/y/yji9ggb8t.css';
import '../../css/q/q_zarvbqj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tsowlmztv"/><path class="lvv06sbtq"/><path class="yji9ggb8t"/><path class="q_zarvbqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:finger-print-sharp"} {...others} />);
}

export default Component;
