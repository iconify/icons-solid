import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rr4slu2yq.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j-t_sircu.css';
import '../../css/o/opary8-sc.css';
import '../../css/v/vh32usnkl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rr4slu2yq secondary"/><g class="dt0cm9dhy primary"><path class="j-t_sircu"/><path class="opary8-sc"/><path class="vh32usnkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:headphones-duo"} {...others} />);
}

export default Component;
