import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kd5gzltfq.css';
import '../../css/h/ha8ssyboi.css';
import '../../css/f/ftsububcj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kd5gzltfq"/><path class="ha8ssyboi"/><path class="ftsububcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-with-files-bold-duotone"} {...others} />);
}

export default Component;
