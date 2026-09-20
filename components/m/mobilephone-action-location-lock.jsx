import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tqlm7mbve.css';
import '../../css/v/v41b02cqh.css';
import '../../css/z/zy4l07ubm.css';
import '../../css/w/wthrl6dqm.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tqlm7mbve"/><path class="v41b02cqh"/><path class="zy4l07ubm"/><path class="wthrl6dqm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:mobilephone-action-location-lock"} {...others} />);
}

export default Component;
