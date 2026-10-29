import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrjor5bbf.css';
import '../../css/n/njn_aqw9z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nrjor5bbf wm-k"/><path class="njn_aqw9z wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:hexagon"} {...others} />);
}

export default Component;
