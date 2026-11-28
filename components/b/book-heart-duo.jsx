import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hg3dien2s.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mdipw5bzh.css';
import '../../css/m/m1ue8zbct.css';
import '../../css/o/o94h5sbfw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hg3dien2s secondary"/><g class="dt0cm9dhy primary"><path class="mdipw5bzh"/><path class="m1ue8zbct"/><path class="o94h5sbfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:book-heart-duo"} {...others} />);
}

export default Component;
