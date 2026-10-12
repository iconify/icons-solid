import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fq7mqvbun.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fq7mqvbun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:thermometer-sun-filled"} {...others} />);
}

export default Component;
