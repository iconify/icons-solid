import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wt09b1byx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wt09b1byx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:fan-direction-up-fill"} {...others} />);
}

export default Component;
