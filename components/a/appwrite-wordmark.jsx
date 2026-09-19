import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xvv2sxohs.css';
import '../../css/t/txt750bes.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="xvv2sxohs"/><path class="txt750bes"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:appwrite-wordmark"} {...others} />);
}

export default Component;
