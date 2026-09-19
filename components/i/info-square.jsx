import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v88_xacul.css';
import '../../css/b/bn6ebpb5p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v88_xacul"/><path class="bn6ebpb5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:info-square"} {...others} />);
}

export default Component;
