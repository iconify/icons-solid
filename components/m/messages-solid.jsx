import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/du1ladt-i.css';
import '../../css/y/ytib5qr7u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="du1ladt-i"/><path class="wm-a ytib5qr7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:messages-solid"} {...others} />);
}

export default Component;
