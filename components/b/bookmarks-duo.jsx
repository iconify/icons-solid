import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nifb8ib4x.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/p62ofhric.css';
import '../../css/u/ubuapjbpy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nifb8ib4x secondary"/><g class="dt0cm9dhy primary"><path class="p62ofhric"/><path class="ubuapjbpy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:bookmarks-duo"} {...others} />);
}

export default Component;
