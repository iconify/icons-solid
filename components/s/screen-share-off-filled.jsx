import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wv72ichwa.css';
import '../../css/r/r14-wv_-r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wv72ichwa"/><path class="r14-wv_-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:screen-share-off-filled"} {...others} />);
}

export default Component;
