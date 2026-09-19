import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sxmemdtnq.css';
import '../../css/a/az7opmutd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sxmemdtnq"/><path class="az7opmutd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:mobile-3"} {...others} />);
}

export default Component;
