import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xcgs8uiau.css';

const viewBox = {"width":374,"height":512};
const content = `<path class="xcgs8uiau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:brotli-old"} {...others} />);
}

export default Component;
