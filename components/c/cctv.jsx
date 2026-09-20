import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9lt2hjyk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f9lt2hjyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:cctv"} {...others} />);
}

export default Component;
