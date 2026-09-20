import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukq-8fbqe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ukq-8fbqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:airbnb-fill"} {...others} />);
}

export default Component;
