import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rhurrtb2s.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o2-_brbuv.css';
import '../../css/k/kxz1mg-ky.css';
import '../../css/l/limh9cbhi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rhurrtb2s secondary"/><g class="dt0cm9dhy primary"><path class="o2-_brbuv"/><path class="kxz1mg-ky"/><path class="limh9cbhi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:magnet-duo"} {...others} />);
}

export default Component;
