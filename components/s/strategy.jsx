import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/go2hddcxj.css';
import '../../css/i/i5wjkl-nm.css';

const viewBox = {"width":23,"height":32};
const content = `<g class="cuyn6tgcc"><path class="go2hddcxj"/><path class="i5wjkl-nm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:strategy"} {...others} />);
}

export default Component;
