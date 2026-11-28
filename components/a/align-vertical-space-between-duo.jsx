import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gmj1iqb4q.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hocq69i_x.css';
import '../../css/k/kb5bn2cqb.css';
import '../../css/f/f2sg_309u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gmj1iqb4q secondary"/><g class="dt0cm9dhy primary"><path class="hocq69i_x"/><path class="kb5bn2cqb"/><path class="f2sg_309u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:align-vertical-space-between-duo"} {...others} />);
}

export default Component;
