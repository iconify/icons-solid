import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oi7zp_b_o.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="oi7zp_b_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:necklace-solid"} {...others} />);
}

export default Component;
