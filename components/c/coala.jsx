import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rtp7e5q6g.css';
import '../../css/q/qi9k6pbvy.css';
import '../../css/i/id739e0ip.css';

const viewBox = {"width":24,"height":24};
const content = `<path xmlns="http://www.w3.org/2000/svg" class="rtp7e5q6g"/><path xmlns="http://www.w3.org/2000/svg" class="qi9k6pbvy"/><path xmlns="http://www.w3.org/2000/svg" class="id739e0ip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:coala"} {...others} />);
}

export default Component;
