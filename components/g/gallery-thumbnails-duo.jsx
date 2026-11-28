import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zx2d8wbyd.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wrj87acev.css';
import '../../css/n/n8-7hlbiv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary zx2d8wbyd"/><g class="dt0cm9dhy primary"><path class="wrj87acev"/><path class="n8-7hlbiv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:gallery-thumbnails-duo"} {...others} />);
}

export default Component;
