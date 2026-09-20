import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5u4lfsns.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y5u4lfsns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:bar-chart"} {...others} />);
}

export default Component;
