import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ktz2u4-vt.css';
import '../../css/y/y72en9ydc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ktz2u4-vt"/><path class="y72en9ydc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-light-bulb"} {...others} />);
}

export default Component;
