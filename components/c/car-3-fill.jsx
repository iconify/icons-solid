import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tqsf3pbmc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tqsf3pbmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:car-3-fill"} {...others} />);
}

export default Component;
