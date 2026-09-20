import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/czh9g6o2n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="czh9g6o2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:eye-2-line"} {...others} />);
}

export default Component;
