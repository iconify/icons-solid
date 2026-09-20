import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qowkc_bfp.css';
import '../../css/j/j1jlz4vzi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qowkc_bfp"/><path class="j1jlz4vzi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:double-alt-arrow-up-linear"} {...others} />);
}

export default Component;
