import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zo60vmb-f.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/g1akucbjg.css';
import '../../css/k/ky0-5j8-r.css';
import '../../css/g/gcmcpc6kt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary zo60vmb-f"/><g class="dt0cm9dhy primary"><path class="g1akucbjg"/><path class="ky0-5j8-r"/><path class="gcmcpc6kt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:bed-duo"} {...others} />);
}

export default Component;
