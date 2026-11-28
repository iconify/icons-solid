import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5ewjwd3r.css';
import '../../css/t/tmsq5rb0d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary w5ewjwd3r"/><path class="primary tmsq5rb0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:droplet-duo"} {...others} />);
}

export default Component;
