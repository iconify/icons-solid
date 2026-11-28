import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ih9nie_nj.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/up2zq7bnn.css';
import '../../css/f/f9qyrhqlz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ih9nie_nj secondary"/><g class="dt0cm9dhy primary"><path class="up2zq7bnn"/><path class="f9qyrhqlz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:messages-square-duo"} {...others} />);
}

export default Component;
