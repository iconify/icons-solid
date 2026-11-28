import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sm28qqb4l.css';
import '../../css/q/q32xggl4h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary sm28qqb4l"/><path class="primary q32xggl4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:message-circle-duo"} {...others} />);
}

export default Component;
