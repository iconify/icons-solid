import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yx32353iz.css';
import '../../css/u/uqgvfpbkg.css';
import '../../css/h/hzh6u4b5v.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="yx32353iz"/><path class="uqgvfpbkg"/><path class="hzh6u4b5v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person-running"} {...others} />);
}

export default Component;
