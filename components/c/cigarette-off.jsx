import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oir3npb4e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oir3npb4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:cigarette-off"} {...others} />);
}

export default Component;
