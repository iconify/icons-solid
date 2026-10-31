import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/by0mu6bun.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="by0mu6bun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:grid-2x2-gloss"} {...others} />);
}

export default Component;
