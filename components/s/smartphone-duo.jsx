import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s05lsoo0a.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d6z50yb1i.css';
import '../../css/c/c_8ts8c3o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s05lsoo0a secondary"/><g class="dt0cm9dhy primary"><path class="d6z50yb1i"/><path class="c_8ts8c3o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:smartphone-duo"} {...others} />);
}

export default Component;
