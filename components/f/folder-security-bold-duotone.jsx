import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hl-98b13w.css';
import '../../css/c/cq-7z0vfp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hl-98b13w"/><path clip-rule="evenodd" class="cq-7z0vfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-security-bold-duotone"} {...others} />);
}

export default Component;
