import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qbvgox5fc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qbvgox5fc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:ubuntu-fill"} {...others} />);
}

export default Component;
