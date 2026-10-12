import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ywj5a93ad.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ywj5a93ad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:car-battery-filled"} {...others} />);
}

export default Component;
