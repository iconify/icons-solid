import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5cl3acyg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y5cl3acyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:image-sparkle-fill-round"} {...others} />);
}

export default Component;
