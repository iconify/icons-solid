import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sr9t3tb3q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sr9t3tb3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:heading"} {...others} />);
}

export default Component;
