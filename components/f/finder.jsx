import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s6q5tnmex.css';
import '../../css/d/dugkeub-s.css';
import '../../css/e/ehf885ncn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="s6q5tnmex"/><path class="dugkeub-s"/><path class="ehf885ncn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:finder"} {...others} />);
}

export default Component;
