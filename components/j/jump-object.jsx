import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i7m7xip3s.css';
import '../../css/l/l9dl06b1q.css';
import '../../css/s/sd4mglwqq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="i7m7xip3s"/><path class="l9dl06b1q"/><path class="sd4mglwqq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:jump-object"} {...others} />);
}

export default Component;
