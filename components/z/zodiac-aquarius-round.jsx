import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z22p2s54p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z22p2s54p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:zodiac-aquarius-round"} {...others} />);
}

export default Component;
