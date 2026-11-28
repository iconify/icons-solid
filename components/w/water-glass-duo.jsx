import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zaz45eb5r.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kpnaedvsj.css';
import '../../css/y/ypzhaybhn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary zaz45eb5r"/><g class="dt0cm9dhy primary"><path class="kpnaedvsj"/><path class="ypzhaybhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:water-glass-duo"} {...others} />);
}

export default Component;
