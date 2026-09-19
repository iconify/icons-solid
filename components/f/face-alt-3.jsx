import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-kbjab1h.css';
import '../../css/m/m95s5yi8q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y-kbjab1h"/><path class="m95s5yi8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:face-alt-3"} {...others} />);
}

export default Component;
