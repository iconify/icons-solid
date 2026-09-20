import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pil-6h3qx.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-2};
const content = `<path class="pil-6h3qx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:branch"} {...others} />);
}

export default Component;
