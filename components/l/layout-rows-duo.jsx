import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j474avols.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oqqr_m9av.css';
import '../../css/r/rjfz0fk0g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j474avols secondary"/><g class="dt0cm9dhy primary"><path class="oqqr_m9av"/><path class="rjfz0fk0g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:layout-rows-duo"} {...others} />);
}

export default Component;
