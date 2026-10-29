import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yel49zbvu.css';
import '../../css/n/nej-5niny.css';
import '../../css/u/u_9h33bqz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-a yel49zbvu"/><path class="nej-5niny wm-a"/><path class="u_9h33bqz wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:bandage"} {...others} />);
}

export default Component;
