import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z167bdcwy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z167bdcwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:fork-knife-crossed"} {...others} />);
}

export default Component;
