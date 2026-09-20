import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w3f5n_j5v.css';
import '../../css/e/evx_9kalt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w3f5n_j5v"/><path class="evx_9kalt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:cog"} {...others} />);
}

export default Component;
