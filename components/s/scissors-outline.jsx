import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mqe620tbb.css';
import '../../css/n/nxaii_ued.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mqe620tbb"/><path class="nxaii_ued"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:scissors-outline"} {...others} />);
}

export default Component;
