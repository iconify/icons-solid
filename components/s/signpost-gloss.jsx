import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ico_k8sza.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ico_k8sza wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:signpost-gloss"} {...others} />);
}

export default Component;
