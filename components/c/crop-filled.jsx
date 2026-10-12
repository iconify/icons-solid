import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv8c1bcfz.css';
import '../../css/w/wvb1r7csl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nv8c1bcfz"/><path clip-rule="evenodd" class="wvb1r7csl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:crop-filled"} {...others} />);
}

export default Component;
