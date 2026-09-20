import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3u8x_kdf.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="y3u8x_kdf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:phone-mobile-phone-solid"} {...others} />);
}

export default Component;
