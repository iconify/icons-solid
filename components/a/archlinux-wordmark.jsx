import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qjeh93b6f.css';
import '../../css/h/hh3_j8aeb.css';
import '../../css/r/rqsccpugz.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="qjeh93b6f"/><path class="hh3_j8aeb"/><path class="rqsccpugz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:archlinux-wordmark"} {...others} />);
}

export default Component;
