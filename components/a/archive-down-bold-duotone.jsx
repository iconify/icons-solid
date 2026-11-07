import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxqrd9b8t.css';
import '../../css/i/i3l80h-5o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cxqrd9b8t"/><path class="i3l80h-5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:archive-down-bold-duotone"} {...others} />);
}

export default Component;
