import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ouxnwhjom.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ouxnwhjom"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:black-board-fill"} {...others} />);
}

export default Component;
