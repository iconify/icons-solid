import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rw8xrvjbq.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/ouxafviye.css';
import '../../css/l/l-21uxusr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rw8xrvjbq secondary"/><g class="dt0cm9dhy primary"><path class="ouxafviye"/><path class="l-21uxusr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:thumbs-down-duo"} {...others} />);
}

export default Component;
