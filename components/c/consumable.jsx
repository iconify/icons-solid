import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i11jghbrq.css';
import '../../css/y/yngtobcdp.css';
import '../../css/w/wmhvecc2b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i11jghbrq"/><path class="yngtobcdp"/><path class="wmhvecc2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:consumable"} {...others} />);
}

export default Component;
