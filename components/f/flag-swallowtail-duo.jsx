import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s16w2fpog.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sy3k4sw_u.css';
import '../../css/v/vfk79qbjz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s16w2fpog secondary"/><g class="dt0cm9dhy primary"><path class="sy3k4sw_u"/><path class="vfk79qbjz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:flag-swallowtail-duo"} {...others} />);
}

export default Component;
