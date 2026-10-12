import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ot6xdwbcv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ot6xdwbcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:arrow-big-up-filled"} {...others} />);
}

export default Component;
