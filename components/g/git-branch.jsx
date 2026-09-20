import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f8hu70bxj.css';
import '../../css/u/u-0rdtb1a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f8hu70bxj"/><path class="u-0rdtb1a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:git-branch"} {...others} />);
}

export default Component;
