import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_nd3rw4o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r_nd3rw4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:square-rounded-letter-o-filled"} {...others} />);
}

export default Component;
