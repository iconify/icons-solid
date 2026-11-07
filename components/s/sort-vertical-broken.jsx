import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/l5gz-vauz.css';
import '../../css/w/w-jwp9cbd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="l5gz-vauz"/><path class="w-jwp9cbd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sort-vertical-broken"} {...others} />);
}

export default Component;
