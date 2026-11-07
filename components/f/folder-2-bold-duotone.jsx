import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pteai7udj.css';
import '../../css/k/kvtxzidpe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pteai7udj"/><path class="kvtxzidpe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-2-bold-duotone"} {...others} />);
}

export default Component;
