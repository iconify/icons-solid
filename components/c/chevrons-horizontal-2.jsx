import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/spfb3wbhj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="spfb3wbhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:chevrons-horizontal-2"} {...others} />);
}

export default Component;
