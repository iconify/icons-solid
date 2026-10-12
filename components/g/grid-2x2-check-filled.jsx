import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sa5vtea9e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sa5vtea9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:grid-2x2-check-filled"} {...others} />);
}

export default Component;
