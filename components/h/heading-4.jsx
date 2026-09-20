import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1o7nwgpq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l1o7nwgpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:heading-4"} {...others} />);
}

export default Component;
