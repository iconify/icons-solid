import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6g4r_b0r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h6g4r_b0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:card-refund-fill"} {...others} />);
}

export default Component;
