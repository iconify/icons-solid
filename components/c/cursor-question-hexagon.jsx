import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/s3evry5lk.css';
import '../../css/m/mjxg2-bbm.css';
import '../../css/y/y__ao-b7v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="s3evry5lk"/><path class="mjxg2-bbm"/><path class="y__ao-b7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:cursor-question-hexagon"} {...others} />);
}

export default Component;
