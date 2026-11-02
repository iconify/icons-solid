import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gbs7r8msg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gbs7r8msg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:file-chart-column-increasing-fill"} {...others} />);
}

export default Component;
