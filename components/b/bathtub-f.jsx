import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yp2xuubcj.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-1.5};
const content = `<path class="yp2xuubcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:bathtub-f"} {...others} />);
}

export default Component;
