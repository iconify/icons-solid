import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jb75b-bsh.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/ss8t1tbbv.css';
import '../../css/b/bu2ngkl5m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jb75b-bsh secondary"/><g class="dt0cm9dhy primary"><path class="ss8t1tbbv"/><path class="bu2ngkl5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:bookmark-star-duo"} {...others} />);
}

export default Component;
