import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0sscpbxm.css';
import '../../css/t/toyc3i1pu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m0sscpbxm"/><path class="toyc3i1pu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:camera-home-filled"} {...others} />);
}

export default Component;
