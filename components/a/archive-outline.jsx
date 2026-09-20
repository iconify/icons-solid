import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gtyn5_b3s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gtyn5_b3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:archive-outline"} {...others} />);
}

export default Component;
