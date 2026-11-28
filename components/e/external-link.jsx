import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vltn-2bvp.css';
import '../../css/g/gk43m7bjx.css';
import '../../css/e/exgf0m5uh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="vltn-2bvp"/><path class="gk43m7bjx"/><path class="exgf0m5uh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:external-link"} {...others} />);
}

export default Component;
