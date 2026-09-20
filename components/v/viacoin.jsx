import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fi9e-h2-h.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fi9e-h2-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:viacoin"} {...others} />);
}

export default Component;
