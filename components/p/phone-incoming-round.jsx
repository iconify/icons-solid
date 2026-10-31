import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ix5wi_6hb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ix5wi_6hb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:phone-incoming-round"} {...others} />);
}

export default Component;
