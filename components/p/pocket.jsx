import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hsvi1nb9w.css';
import '../../css/f/f046g0bgs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hsvi1nb9w"/><path class="f046g0bgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:pocket"} {...others} />);
}

export default Component;
