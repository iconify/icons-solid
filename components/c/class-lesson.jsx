import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e8i5p3b1y.css';
import '../../css/s/sheko5ree.css';
import '../../css/l/lgue0ybdj.css';
import '../../css/w/wjvujgtth.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="e8i5p3b1y"/><path class="sheko5ree"/><path class="lgue0ybdj"/><path class="wjvujgtth"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:class-lesson"} {...others} />);
}

export default Component;
