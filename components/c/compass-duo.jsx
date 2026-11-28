import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1_erobys.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/spokbjbne.css';
import '../../css/f/f8xqsfb6s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l1_erobys secondary"/><g class="dt0cm9dhy primary"><path class="spokbjbne"/><path class="f8xqsfb6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:compass-duo"} {...others} />);
}

export default Component;
