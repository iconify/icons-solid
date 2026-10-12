import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-c__p3wy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l-c__p3wy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:handle-bottom-right"} {...others} />);
}

export default Component;
