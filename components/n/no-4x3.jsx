import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lyroak62h.css';
import '../../css/j/jtbbcksnj.css';
import '../../css/l/lm6pm0b8y.css';
import '../../css/d/ddczr-bbd.css';
import '../../css/c/cl6jqfbnm.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="lyroak62h"/><path class="jtbbcksnj"/><path class="lm6pm0b8y"/><path class="ddczr-bbd"/><path class="cl6jqfbnm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:no-4x3"} {...others} />);
}

export default Component;
