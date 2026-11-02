import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vu-9zjbvo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vu-9zjbvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:happy-fill"} {...others} />);
}

export default Component;
