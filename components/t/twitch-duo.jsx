import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fukmeobbs.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sdadatb0l.css';
import '../../css/d/d7nqjgwls.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fukmeobbs secondary"/><g class="dt0cm9dhy primary"><path class="sdadatb0l"/><path class="d7nqjgwls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:twitch-duo"} {...others} />);
}

export default Component;
