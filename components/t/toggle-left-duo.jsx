import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivtwj9k1u.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t7kmbybpb.css';
import '../../css/e/er_ijhjpg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ivtwj9k1u secondary"/><g class="dt0cm9dhy primary"><path class="t7kmbybpb"/><path class="er_ijhjpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:toggle-left-duo"} {...others} />);
}

export default Component;
