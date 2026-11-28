import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a25g90ajj.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/ss8t1tbbv.css';
import '../../css/i/i29ayhbly.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a25g90ajj secondary"/><g class="dt0cm9dhy primary"><path class="ss8t1tbbv"/><path class="i29ayhbly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:bookmark-minus-duo"} {...others} />);
}

export default Component;
