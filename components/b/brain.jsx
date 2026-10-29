import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_1j10-np.css';
import '../../css/r/r2nonpb-r.css';
import '../../css/l/lhyk42bxl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m_1j10-np wm-a"/><path class="r2nonpb-r wm-a"/><path class="lhyk42bxl wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:brain"} {...others} />);
}

export default Component;
