import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6h29rbbh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e6h29rbbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:desktop-alt-slash"} {...others} />);
}

export default Component;
