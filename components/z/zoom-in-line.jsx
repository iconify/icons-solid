import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jc77rmbbf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jc77rmbbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:zoom-in-line"} {...others} />);
}

export default Component;
