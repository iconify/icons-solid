import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lbsc4s31x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lbsc4s31x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:login-circle-line"} {...others} />);
}

export default Component;
