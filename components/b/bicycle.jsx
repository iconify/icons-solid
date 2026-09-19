import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kiy9nha1s.css';
import '../../css/u/uzn0bb4xh.css';
import '../../css/e/e4vh_8b-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kiy9nha1s"/><path class="uzn0bb4xh"/><path class="e4vh_8b-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:bicycle"} {...others} />);
}

export default Component;
