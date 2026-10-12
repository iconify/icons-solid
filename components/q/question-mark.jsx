import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wd-w5sr6f.css';
import '../../css/t/t0p2onb6b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wd-w5sr6f"/><path class="t0p2onb6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:question-mark"} {...others} />);
}

export default Component;
