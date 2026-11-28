import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdn6aac2h.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ap2vq_ggp.css';
import '../../css/z/z5a-asbbl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gdn6aac2h secondary"/><g class="dt0cm9dhy primary"><path class="ap2vq_ggp"/><path class="z5a-asbbl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:megaphone-duo"} {...others} />);
}

export default Component;
