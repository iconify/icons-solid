import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qi-0n8byp.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/ydkjijhaq.css';
import '../../css/y/yq2tbpldz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qi-0n8byp secondary"/><g class="dt0cm9dhy primary"><path class="ydkjijhaq"/><path class="yq2tbpldz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:laptop-duo"} {...others} />);
}

export default Component;
