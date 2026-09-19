import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tw-oxi3gx.css';
import '../../css/c/co1tuvbwd.css';
import '../../css/w/wjdawyy4v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="tw-oxi3gx"/><path class="co1tuvbwd"/><path class="wjdawyy4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:workout-sport"} {...others} />);
}

export default Component;
