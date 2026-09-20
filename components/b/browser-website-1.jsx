import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z2i_vdbub.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="z2i_vdbub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:browser-website-1"} {...others} />);
}

export default Component;
