import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wh4r42bvm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wh4r42bvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:step-forward"} {...others} />);
}

export default Component;
