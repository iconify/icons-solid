import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f07shlhtd.css';
import '../../css/u/u_9gx3aby.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f07shlhtd"/><path class="u_9gx3aby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:gps-slash"} {...others} />);
}

export default Component;
