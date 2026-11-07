import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/za9uchb8f.css';
import '../../css/j/j2-x-cbeh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="za9uchb8f"/><path class="j2-x-cbeh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:columns-2-bold-duotone"} {...others} />);
}

export default Component;
