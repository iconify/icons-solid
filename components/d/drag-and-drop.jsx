import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rd_z6iuxt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rd_z6iuxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:drag-and-drop"} {...others} />);
}

export default Component;
