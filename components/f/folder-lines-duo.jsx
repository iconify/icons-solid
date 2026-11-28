import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tun7kpbmr.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tgy8uab8v.css';
import '../../css/d/da9v01fef.css';
import '../../css/n/n2ypo-bfy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary tun7kpbmr"/><g class="dt0cm9dhy primary"><path class="tgy8uab8v"/><path class="da9v01fef"/><path class="n2ypo-bfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:folder-lines-duo"} {...others} />);
}

export default Component;
