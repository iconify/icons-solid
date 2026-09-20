import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gmnn46d_q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gmnn46d_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:arrow-up-left-24"} {...others} />);
}

export default Component;
