import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oe8bcf4ev.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oe8bcf4ev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:ticket-plus"} {...others} />);
}

export default Component;
