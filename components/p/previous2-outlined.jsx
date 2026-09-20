import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ahd-08pqr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ahd-08pqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"weui:previous2-outlined"} {...others} />);
}

export default Component;
