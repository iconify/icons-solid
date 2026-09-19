import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i1jpfm-xo.css';
import '../../css/m/mv7ytg7oj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i1jpfm-xo"/><path class="mv7ytg7oj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:candy"} {...others} />);
}

export default Component;
