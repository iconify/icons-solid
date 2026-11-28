import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i9ny4bbtp.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nwv1ikbat.css';
import '../../css/l/ll03xspng.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i9ny4bbtp secondary"/><g class="dt0cm9dhy primary"><path class="nwv1ikbat"/><path class="ll03xspng"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:waffle-duo"} {...others} />);
}

export default Component;
