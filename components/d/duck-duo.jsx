import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b23un12lm.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/ciud1kn-e.css';
import '../../css/l/lcrewz3kz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b23un12lm secondary"/><g class="dt0cm9dhy primary"><path class="ciud1kn-e"/><path class="lcrewz3kz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:duck-duo"} {...others} />);
}

export default Component;
