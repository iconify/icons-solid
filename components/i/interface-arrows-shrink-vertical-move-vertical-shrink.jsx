import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zv60btb6h.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="zv60btb6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-shrink-vertical-move-vertical-shrink"} {...others} />);
}

export default Component;
