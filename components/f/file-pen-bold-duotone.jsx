import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sgissgbda.css';
import '../../css/t/t3fbyzb7o.css';
import '../../css/o/ont9fsbmp.css';
import '../../css/h/hvizvfbcp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sgissgbda"/><path class="t3fbyzb7o"/><path class="ont9fsbmp"/><path class="hvizvfbcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-pen-bold-duotone"} {...others} />);
}

export default Component;
