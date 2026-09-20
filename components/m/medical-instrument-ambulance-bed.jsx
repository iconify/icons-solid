import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/czzkhvbei.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="czzkhvbei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:medical-instrument-ambulance-bed"} {...others} />);
}

export default Component;
