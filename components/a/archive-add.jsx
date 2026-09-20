import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ymqcrk8yb.css';
import '../../css/j/j1_g_if2b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ymqcrk8yb"/><path class="j1_g_if2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:archive-add"} {...others} />);
}

export default Component;
