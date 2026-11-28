import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/enyryrbow.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l-em5n3wu.css';
import '../../css/t/td39edehy.css';
import '../../css/g/gxcdsu0rs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="enyryrbow secondary"/><g class="dt0cm9dhy primary"><path class="l-em5n3wu"/><path class="td39edehy"/><path class="gxcdsu0rs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:sushi-duo"} {...others} />);
}

export default Component;
