import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yf1epnbow.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yf1epnbow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:expand-left-fill"} {...others} />);
}

export default Component;
