import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbz6o0bkp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kbz6o0bkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:move-down-right"} {...others} />);
}

export default Component;
