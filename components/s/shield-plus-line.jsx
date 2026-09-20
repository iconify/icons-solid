import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_v1k8bfd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l_v1k8bfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:shield-plus-line"} {...others} />);
}

export default Component;
