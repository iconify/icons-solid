import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kxhz2_bsp.css';
import '../../css/w/wbz7ex9hn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kxhz2_bsp"/><path class="wbz7ex9hn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:bsw"} {...others} />);
}

export default Component;
