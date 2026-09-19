import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0_4_pb3c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i0_4_pb3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:right-arrow-circle"} {...others} />);
}

export default Component;
