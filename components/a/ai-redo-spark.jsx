import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zv3abmbvr.css';
import '../../css/w/wnfnvklnf.css';
import '../../css/e/ez95c6pki.css';
import '../../css/r/rk65x3koe.css';
import '../../css/e/ewskc41gr.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="zv3abmbvr"/><path class="wnfnvklnf"/><path class="ez95c6pki"/><path class="rk65x3koe"/><path class="ewskc41gr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:ai-redo-spark"} {...others} />);
}

export default Component;
