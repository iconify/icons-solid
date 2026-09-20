import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v86opfbei.css';
import '../../css/j/jm0bi5b3t.css';
import '../../css/f/f40r78ewj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="v86opfbei"/><path class="jm0bi5b3t"/><path class="f40r78ewj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:warning-triangle"} {...others} />);
}

export default Component;
