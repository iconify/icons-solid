import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rtkbmnbdq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rtkbmnbdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:bar-chart-3"} {...others} />);
}

export default Component;
