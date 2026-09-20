import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wt1bt7bcg.css';
import '../../css/w/w-jwp9cbd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wt1bt7bcg"/><path class="w-jwp9cbd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sort-vertical-broken"} {...others} />);
}

export default Component;
