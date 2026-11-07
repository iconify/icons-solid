import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fpavm-beg.css';
import '../../css/p/pfluh_2pb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fpavm-beg"/><path clip-rule="evenodd" class="pfluh_2pb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:home-outline"} {...others} />);
}

export default Component;
