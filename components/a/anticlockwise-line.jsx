import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xz89qj44i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xz89qj44i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:anticlockwise-line"} {...others} />);
}

export default Component;
