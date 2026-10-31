import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ziz0u5bke.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ziz0u5bke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cursor-sparkle-round"} {...others} />);
}

export default Component;
