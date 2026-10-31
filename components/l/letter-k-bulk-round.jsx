import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwo7y5b1s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wwo7y5b1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:letter-k-bulk-round"} {...others} />);
}

export default Component;
