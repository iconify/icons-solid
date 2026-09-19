import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/das0gdcyg.css';

const viewBox = {"width":464,"height":464};
const content = `<path class="das0gdcyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:stumbleupon"} {...others} />);
}

export default Component;
