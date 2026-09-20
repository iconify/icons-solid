import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_oaq9bhw.css';
import '../../css/t/t_82l-4pq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="m_oaq9bhw"/><path clip-rule="evenodd" class="t_82l-4pq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:safe-solid"} {...others} />);
}

export default Component;
