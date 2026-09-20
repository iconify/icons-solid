import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cpgehrbxy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cpgehrbxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:area-chart-fill"} {...others} />);
}

export default Component;
