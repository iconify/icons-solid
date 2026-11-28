import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nszsuhv2a.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/iadswjb9y.css';
import '../../css/k/kaq0l3eog.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nszsuhv2a secondary"/><g class="dt0cm9dhy primary"><path class="iadswjb9y"/><path class="kaq0l3eog"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:edit-duo"} {...others} />);
}

export default Component;
