import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q2vjo1bbe.css';
import '../../css/f/f9q8jbbit.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q2vjo1bbe"/><path class="f9q8jbbit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:login"} {...others} />);
}

export default Component;
