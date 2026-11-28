import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hpt1mobpl.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t7kmbybpb.css';
import '../../css/o/o4zir7b9h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hpt1mobpl secondary"/><g class="dt0cm9dhy primary"><path class="t7kmbybpb"/><path class="o4zir7b9h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:toggle-right-duo"} {...others} />);
}

export default Component;
