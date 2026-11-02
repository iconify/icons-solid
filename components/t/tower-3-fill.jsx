import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qp7sqsb5h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qp7sqsb5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:tower-3-fill"} {...others} />);
}

export default Component;
