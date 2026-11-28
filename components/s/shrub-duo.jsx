import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j39z1x3ue.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k5o72ctes.css';
import '../../css/g/gg4tmrbop.css';
import '../../css/g/gt-qm7b9j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j39z1x3ue secondary"/><g class="dt0cm9dhy primary"><path class="k5o72ctes"/><path class="gg4tmrbop"/><path class="gt-qm7b9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:shrub-duo"} {...others} />);
}

export default Component;
