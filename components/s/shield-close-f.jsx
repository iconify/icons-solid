import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zlv_0xbwg.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-1.5};
const content = `<path class="zlv_0xbwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:shield-close-f"} {...others} />);
}

export default Component;
