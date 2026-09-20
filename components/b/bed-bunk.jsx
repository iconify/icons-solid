import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2c8sk-0i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k2c8sk-0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:bed-bunk"} {...others} />);
}

export default Component;
