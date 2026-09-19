import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pz7ig2byl.css';
import '../../css/r/r84d-fjav.css';
import '../../css/i/i_sm4v1ds.css';
import '../../css/w/wss-6qbmu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pz7ig2byl"/><path class="r84d-fjav"/><path class="i_sm4v1ds"/><path class="wss-6qbmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:nautical-lamp"} {...others} />);
}

export default Component;
