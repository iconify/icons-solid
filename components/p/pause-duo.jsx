import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mr99gxblo.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cq_0n3bjh.css';
import '../../css/a/agr5fpl-z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mr99gxblo secondary"/><g class="dt0cm9dhy primary"><path class="cq_0n3bjh"/><path class="agr5fpl-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:pause-duo"} {...others} />);
}

export default Component;
