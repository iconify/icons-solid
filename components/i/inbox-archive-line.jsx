import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ld05h-xwh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ld05h-xwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:inbox-archive-line"} {...others} />);
}

export default Component;
