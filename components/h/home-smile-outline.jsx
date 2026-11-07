import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbtkp4_fw.css';
import '../../css/p/pfluh_2pb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vbtkp4_fw"/><path clip-rule="evenodd" class="pfluh_2pb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:home-smile-outline"} {...others} />);
}

export default Component;
