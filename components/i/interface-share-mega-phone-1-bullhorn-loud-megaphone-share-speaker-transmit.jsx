import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hut9axcvl.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="hut9axcvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-share-mega-phone-1-bullhorn-loud-megaphone-share-speaker-transmit"} {...others} />);
}

export default Component;
