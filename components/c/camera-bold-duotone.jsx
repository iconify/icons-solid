import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zvnq9o5sc.css';
import '../../css/s/slns-v7tw.css';
import '../../css/t/tawubeb5f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zvnq9o5sc"/><path class="slns-v7tw"/><path clip-rule="evenodd" class="tawubeb5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:camera-bold-duotone"} {...others} />);
}

export default Component;
