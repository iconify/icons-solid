import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6yy04fix.css';
import '../../css/o/o4u834bpr.css';
import '../../css/a/avmk686_u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x6yy04fix"/><path class="o4u834bpr"/><path class="avmk686_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notebook-square-bold-duotone"} {...others} />);
}

export default Component;
