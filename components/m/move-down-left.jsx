import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ppsp0su1e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ppsp0su1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:move-down-left"} {...others} />);
}

export default Component;
